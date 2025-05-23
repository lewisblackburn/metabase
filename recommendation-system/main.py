# main.py

import os
import requests
import hashlib
import json
import pandas as pd
from surprise import Dataset, Reader, SVD
import pickle
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import threading
import time

app = FastAPI()

# NOTE: Allow all CORS for now
# WARN: This is not safe in the long term
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# NOTE: Store the following files in a cache, so that the recommendations are not recomputed if nothing has changed
cache_dir = "cache"
os.makedirs(cache_dir, exist_ok=True)
ratings_file = os.path.join(cache_dir, "ratings.json")
hash_file = os.path.join(cache_dir, "ratings_hash.txt")
model_file = os.path.join(cache_dir, "svd_model.pkl")
recommendations_file = os.path.join(cache_dir, "recommendations.json")

# NOTE: Global cache
cached_recommendations = {}
cached = False

# NOTE: Fetch data from NHost through serverless function defined on frontend
api_url = "https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/export_user_statuses"

def compute_recommendations():
    global cached_recommendations, cached

    response = requests.get(api_url)
    ratings_data = response.json()

    # NOTE: Store ratings and create a hash for json object
    ratings_json_str = json.dumps(ratings_data, sort_keys=True)
    ratings_hash = hashlib.sha256(ratings_json_str.encode('utf-8')).hexdigest()

    previous_hash = None
    if os.path.exists(hash_file):
        with open(hash_file, 'r') as f:
            previous_hash = f.read().strip()

    # NOTE: If hash is same and we have a cached file, load it.
    if ratings_hash == previous_hash and os.path.exists(recommendations_file):
        try:
            with open(recommendations_file, 'r') as f:
                cached_recommendations = json.load(f)
            cached = True
            return
        # NOTE: If error delete file.
        except json.JSONDecodeError:
            print("Warning: recommendations cache is corrupted; will recompute.")
            try:
                os.remove(recommendations_file)
            except OSError:
                pass

    with open(ratings_file, 'w') as f:
        json.dump(ratings_data, f)
    with open(hash_file, 'w') as f:
        f.write(ratings_hash)

    # NOTE: Train SVD model based on data
    df = pd.DataFrame(ratings_data)
    reader = Reader(rating_scale=(1, 10))
    data_for_surprise = Dataset.load_from_df(df[['user_id', 'media_id', 'value']], reader)
    trainset = data_for_surprise.build_full_trainset()

    model = SVD()
    model.fit(trainset)

    # NOTE: Cache model
    with open(model_file, 'wb') as f:
        pickle.dump(model, f)

    all_media_ids = df['media_id'].unique()
    all_user_ids = df['user_id'].unique()

    all_recommendations = {}

    # NOTE: Create lookup dictionary for media titles, images and types
    media_title_lookup = df.set_index("media_id")["title"].to_dict()
    media_image_lookup = df.set_index("media_id")["image"].to_dict()
    media_type_lookup = df.set_index("media_id")["type"].to_dict()

    # NOTE: Generate recommendations for each user
    for user_id in all_user_ids:
        # NOTE: Remove items already rated by user
        user_rated_items = df[df['user_id'] == user_id]['media_id'].unique()
        items_to_predict = [iid for iid in all_media_ids if iid not in user_rated_items]
        
        predictions = [model.predict(user_id, iid) for iid in items_to_predict]
        predictions.sort(key=lambda x: x.est, reverse=True)

        top_recommendations = {
            pred.iid: {
                "score": pred.est,
                "title": media_title_lookup.get(pred.iid, "unknown"),
                "image": media_image_lookup.get(pred.iid, "unknown"),
                "type": media_type_lookup.get(pred.iid, "unknown")
            }
            for pred in predictions[:5]
        }

        all_recommendations[user_id] = dict(top_recommendations)

    # NOTE: Save to file
    with open(recommendations_file, 'w') as f:
        json.dump(all_recommendations, f)

    cached = False
    cached_recommendations = all_recommendations

def internal_cron_job(interval_minutes: int = 30):
    while True:
        print(f"Recomputing recommendations at {time.strftime('%Y-%m-%d %H:%M:%S')}")
        try:
            compute_recommendations()
        except Exception as e:
            print(f"Error during recommendation update: {e}")
        time.sleep(interval_minutes * 60)

@app.on_event("startup")
def on_startup():
    threading.Thread(target=internal_cron_job, daemon=True).start()
    try:
        compute_recommendations()
    except Exception as e:
        print(f"Error on initial recommendation computation: {e}")

def get_recommendations(user_id):
    return cached_recommendations.get(user_id, {})

@app.get("/recommend/{user_id}")
def recommend(user_id: str):
    recs = get_recommendations(user_id)
    if not recs:
        return JSONResponse(status_code=404, content={"error": "User not found"})
    return recs

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=port
    )
