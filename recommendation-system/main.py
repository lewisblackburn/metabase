import os
import requests
import hashlib
import json
import pandas as pd
from surprise import Dataset, Reader, SVD
from surprise.model_selection import train_test_split
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

# Fetch data from the NHost API from the serverless function defined in the frontend
api_url = "https://lwmecktyyhputyqkdigy.functions.eu-west-2.nhost.run/v1/export_user_statuses"

# Global cache
cached_recommendations = {}
cached = False

def compute_recommendations():
    global cached_recommendations, cached

    response = requests.get(api_url)
    ratings_data = response.json()

    # Store the ratings and create a hash for the json object
    ratings_json_str = json.dumps(ratings_data, sort_keys=True)
    ratings_hash = hashlib.sha256(ratings_json_str.encode('utf-8')).hexdigest()

    # Load the hash if there is one
    previous_hash = None
    if os.path.exists(hash_file):
        with open(hash_file, 'r') as f:
            previous_hash = f.read().strip()

    # If the hashes are the same and recommendations have been generated, set cached to True and load them
    # Else update the cache if the hashes are different
    if ratings_hash == previous_hash and os.path.exists(recommendations_file):
        with open(recommendations_file, 'r') as f:
            cached_recommendations = json.load(f)
        cached = True
    else:
        with open(ratings_file, 'w') as f:
            json.dump(ratings_data, f)
        with open(hash_file, 'w') as f:
            f.write(ratings_hash)

        # Train the model based on the data provided
        df = pd.DataFrame(ratings_data)
        reader = Reader(rating_scale=(1, 10))
        data_for_surprise = Dataset.load_from_df(df[['user_id', 'media_id', 'value']], reader)
        trainset = data_for_surprise.build_full_trainset()

        model = SVD()
        model.fit(trainset)

        # Cache the model
        with open(model_file, 'wb') as f:
            pickle.dump(model, f)

        all_media_ids = df['media_id'].unique()
        all_user_ids = df['user_id'].unique()

        all_recommendations = {}

        # Create a lookup dictionary for media titles, images and types
        media_title_lookup = df.set_index("media_id")["title"].to_dict()
        media_image_lookup = df.set_index("media_id")["image"].to_dict()
        media_type_lookup = df.set_index("media_id")["type"].to_dict()

        # Compute recommendations for each user
        for user_id in all_user_ids:
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

        # Save them to a file recommendations
        with open(recommendations_file, 'w') as f:
            json.dump(all_recommendations, f)
        
        cached = False
        cached_recommendations = all_recommendations

# NOTE: This is set to run every minute for demonstration purposes only
def internal_cron_job(interval_minutes: int = 1):
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
    compute_recommendations()  # Also compute once at startup

def get_recommendations(user_id):
    return cached_recommendations.get(user_id, {})

@app.get("/recommend/{user_id}")
def recommend(user_id: str):
    recs = get_recommendations(user_id)
    if not recs:
        return JSONResponse(status_code=404, content={"error": "User not found"})
    return recs

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
