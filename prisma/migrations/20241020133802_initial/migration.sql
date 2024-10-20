-- CreateTable
CREATETABLE"User"(
    "id"TEXTNOTNULLPRIMARYKEY,
    "email"TEXTNOTNULL,
    "username"TEXTNOTNULL,
    "name"TEXT,
    "createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
    "updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"ApiKey"(
"id"TEXTNOTNULLPRIMARYKEY,
"key"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"ApiKey_userId_fkey"FOREIGNKEY(
    "userId"
)REFERENCES"User"(
    "id"
)
    ON DELETERESTRICT
        ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Notification"(
"id"TEXTNOTNULLPRIMARYKEY,
"title"TEXTNOTNULL,
"content"TEXTNOTNULL,
"read"BOOLEANNOTNULLDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"userId"TEXTNOTNULLCONSTRAINT"Notification_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
    ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Note"(
"id"TEXTNOTNULLPRIMARYKEY,
"title"TEXTNOTNULL,
"content"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"ownerId"TEXTNOTNULLCONSTRAINT"Note_ownerId_fkey"FOREIGNKEY(
"ownerId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"NoteImage"(
"id"TEXTNOTNULLPRIMARYKEY,
"altText"TEXT,
"contentType"TEXTNOTNULL,
"blob"BLOBNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"noteId"TEXTNOTNULLCONSTRAINT"NoteImage_noteId_fkey"FOREIGNKEY(
"noteId"
)REFERENCES"Note"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"UserImage"(
"id"TEXTNOTNULLPRIMARYKEY,
"altText"TEXT,
"contentType"TEXTNOTNULL,
"blob"BLOBNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"userId"TEXTNOTNULLCONSTRAINT"UserImage_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Password"(
"hash"TEXTNOTNULL,
"userId"TEXTNOTNULLCONSTRAINT"Password_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Session"(
"id"TEXTNOTNULLPRIMARYKEY,
"expirationDate" DATETIMENOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"userId"TEXTNOTNULLCONSTRAINT"Session_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Permission"(
"id"TEXTNOTNULLPRIMARYKEY,
"action"TEXTNOTNULL,
"entity"TEXTNOTNULL,
"access"TEXTNOTNULL,
"description"TEXTNOTNULLDEFAULT'',
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"Role"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"description"TEXTNOTNULLDEFAULT'',
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"Verification"(
"id"TEXTNOTNULLPRIMARYKEY,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"type"TEXTNOTNULL,
"target"TEXTNOTNULL,
"secret"TEXTNOTNULL,
"algorithm"TEXTNOTNULL,
"digits"INTEGERNOTNULL,
"period"INTEGERNOTNULL,
"charSet"TEXTNOTNULL,
"expiresAt" DATETIME
);
-- CreateTable
CREATETABLE"Connection"(
"id"TEXTNOTNULLPRIMARYKEY,
"providerName"TEXTNOTNULL,
"providerId"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"userId"TEXTNOTNULLCONSTRAINT"Connection_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Person"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"knownForDepartment"TEXT,
"biography"TEXT,
"birthdate" DATETIME,
"dayOfDeath" DATETIME,
"gender"TEXT,
"placeOfBirth"TEXT,
"homepage"TEXT,
"viewCount"INTEGERNOTNULLDEFAULT0,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"tmdbID"TEXT,
"image"TEXTDEFAULT'/images/placeholder/300x450.png'
);
-- CreateTable
CREATETABLE"PersonImage"(
"id"TEXTNOTNULLPRIMARYKEY,
"personId"TEXTNOTNULL,
"filename"TEXTNOTNULL,
"url"TEXTNOTNULL,
"primary"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"PersonImage_personId_fkey"FOREIGNKEY(
"personId"
)REFERENCES"Person"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Film"(
"id"TEXTNOTNULLPRIMARYKEY,
"title"TEXTNOTNULL,
"overview"TEXTNOTNULL,
"releaseDate" DATETIME,
"ageRating"TEXT,
"runtime"REAL,
"language"TEXTDEFAULT'English',
"budget"REAL,
"revenue"REAL,
"status"TEXT,
"voteAverage"REALNOTNULLDEFAULT0,
"voteCount"INTEGERDEFAULT0,
"viewCount"INTEGERDEFAULT0,
"contentScore"REAL,
"website"TEXT,
"facebook"TEXT,
"instagram"TEXT,
"twitter"TEXT,
"imdbID"TEXT,
"wikiDataID"TEXT,
"tmdbID"TEXT,
"locked"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"poster"TEXTDEFAULT'/images/placeholder/300x450.png',
"backdrop"TEXTDEFAULT'/images/placeholder/1920x1080.png',
"trailer"TEXTDEFAULT'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
"tagline"TEXT,
"productionCountries"TEXT
);
-- CreateTable
CREATETABLE"FilmRecommendation"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"recommendedFilmId"TEXTNOTNULL,
"similarity"REALNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmRecommendation_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmRecommendation_recommendedFilmId_fkey"FOREIGNKEY(
"recommendedFilmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmCastMember"(
"id"TEXTNOTNULLPRIMARYKEY,
"numerator"INTEGERNOTNULL,
"denominator"INTEGERNOTNULL,
"character"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"filmId"TEXTNOTNULL,
"personId"TEXTNOTNULLCONSTRAINT"FilmCastMember_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmCastMember_personId_fkey"FOREIGNKEY(
"personId"
)REFERENCES"Person"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmCrewMember"(
"id"TEXTNOTNULLPRIMARYKEY,
"department"TEXTNOTNULL,
"job"TEXTNOTNULL,
"featured"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL,
"filmId"TEXTNOTNULL,
"personId"TEXTNOTNULLCONSTRAINT"FilmCrewMember_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmCrewMember_personId_fkey"FOREIGNKEY(
"personId"
)REFERENCES"Person"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmPhoto"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"type"TEXTNOTNULL,
"filename"TEXTNOTNULL,
"url"TEXTNOTNULL,
"language"TEXTDEFAULT'English',
"primary"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmPhoto_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmVideo"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"type"TEXTNOTNULL,
"site"TEXTNOTNULL,
"quality"TEXTNOTNULL,
"name"TEXTNOTNULL,
"url"TEXTNOTNULL,
"language"TEXTDEFAULT'English',
"primary"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmVideo_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmTagline"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"tagline"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmTagline_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmGenre"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"FilmKeyword"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"FilmRating"(
"filmId"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"value"INTEGERNOTNULLDEFAULT0,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmRating_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmRating_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmReview"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"title"TEXTNOTNULL,
"content"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmReview_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmReview_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmReview_filmId_userId_fkey"FOREIGNKEY(
"filmId",
"userId"
)REFERENCES"FilmRating"(
"filmId",
"userId"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmAlternateTitle"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"title"TEXTNOTNULL,
"country"TEXTNOTNULL,
"locked"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmAlternateTitle_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmReleaseInformation"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"country"TEXT,
"language"TEXTDEFAULT'English',
"date" DATETIMENOTNULL,
"classification"TEXT,
"type"TEXT,
"note"TEXT,
"locked"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmReleaseInformation_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmEdit"(
"id"INTEGERNOTNULLPRIMARYKEYAUTOINCREMENT,
"model"TEXTNOTNULL,
"operation"TEXTNOTNULL,
"oldValues"TEXT,
"newValues"TEXT,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"userId"TEXTNOTNULL,
"filmId"TEXTNOTNULLCONSTRAINT"FilmEdit_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETENOACTION
ON UPDATECASCADECONSTRAINT"FilmEdit_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"FilmFavourite"(
"id"TEXTNOTNULLPRIMARYKEY,
"filmId"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"FilmFavourite_filmId_fkey"FOREIGNKEY(
"filmId"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"FilmFavourite_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"ProductionCompany"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"location"TEXT,
"country"TEXT,
"logo"TEXTDEFAULT'/images/placeholder/300x450.png',
"homepage"TEXT,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"Location"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"Song"(
"id"TEXTNOTNULLPRIMARYKEY,
"title"TEXTNOTNULL,
"artist"TEXTNOTNULL,
"duration"INTEGERNOTNULL,
"locked"BOOLEANDEFAULTFALSE,
"albumId"TEXT,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"Song_albumId_fkey"FOREIGNKEY(
"albumId"
)REFERENCES"Album"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"Album"(
"id"TEXTNOTNULLPRIMARYKEY,
"title"TEXTNOTNULL,
"year"INTEGERNOTNULL,
"cover"TEXTDEFAULT'/images/placeholder/300x450.png',
"locked"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULL
);
-- CreateTable
CREATETABLE"Artist"(
"id"TEXTNOTNULLPRIMARYKEY,
"name"TEXTNOTNULL,
"personId"TEXTNOTNULL,
"locked"BOOLEANDEFAULTFALSE,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"Artist_personId_fkey"FOREIGNKEY(
"personId"
)REFERENCES"Person"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"SongRating"(
"songId"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"value"INTEGERNOTNULLDEFAULT0,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"SongRating_songId_fkey"FOREIGNKEY(
"songId"
)REFERENCES"Song"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"SongRating_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"SongReview"(
"id"TEXTNOTNULLPRIMARYKEY,
"songId"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"title"TEXTNOTNULL,
"content"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"SongReview_songId_fkey"FOREIGNKEY(
"songId"
)REFERENCES"Song"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"SongReview_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"SongReview_songId_userId_fkey"FOREIGNKEY(
"songId",
"userId"
)REFERENCES"SongRating"(
"songId",
"userId"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"SongFavourite"(
"id"TEXTNOTNULLPRIMARYKEY,
"songId"TEXTNOTNULL,
"userId"TEXTNOTNULL,
"createdAt" DATETIMENOTNULLDEFAULTCURRENT_TIMESTAMP,
"updatedAt" DATETIMENOTNULLCONSTRAINT"SongFavourite_songId_fkey"FOREIGNKEY(
"songId"
)REFERENCES"Song"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"SongFavourite_userId_fkey"FOREIGNKEY(
"userId"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"_PermissionToRole"(
"A"TEXTNOTNULL,
"B"TEXTNOTNULLCONSTRAINT"_PermissionToRole_A_fkey"FOREIGNKEY(
"A"
)REFERENCES"Permission"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"_PermissionToRole_B_fkey"FOREIGNKEY(
"B"
)REFERENCES"Role"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"_RoleToUser"(
"A"TEXTNOTNULL,
"B"TEXTNOTNULLCONSTRAINT"_RoleToUser_A_fkey"FOREIGNKEY(
"A"
)REFERENCES"Role"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"_RoleToUser_B_fkey"FOREIGNKEY(
"B"
)REFERENCES"User"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"_FilmToFilmGenre"(
"A"TEXTNOTNULL,
"B"TEXTNOTNULLCONSTRAINT"_FilmToFilmGenre_A_fkey"FOREIGNKEY(
"A"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"_FilmToFilmGenre_B_fkey"FOREIGNKEY(
"B"
)REFERENCES"FilmGenre"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"_FilmToFilmKeyword"(
"A"TEXTNOTNULL,
"B"TEXTNOTNULLCONSTRAINT"_FilmToFilmKeyword_A_fkey"FOREIGNKEY(
"A"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"_FilmToFilmKeyword_B_fkey"FOREIGNKEY(
"B"
)REFERENCES"FilmKeyword"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"_FilmToProductionCompany"(
"A"TEXTNOTNULL,
"B"TEXTNOTNULLCONSTRAINT"_FilmToProductionCompany_A_fkey"FOREIGNKEY(
"A"
)REFERENCES"Film"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"_FilmToProductionCompany_B_fkey"FOREIGNKEY(
"B"
)REFERENCES"ProductionCompany"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateTable
CREATETABLE"_AlbumToArtist"(
"A"TEXTNOTNULL,
"B"TEXTNOTNULLCONSTRAINT"_AlbumToArtist_A_fkey"FOREIGNKEY(
"A"
)REFERENCES"Album"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADECONSTRAINT"_AlbumToArtist_B_fkey"FOREIGNKEY(
"B"
)REFERENCES"Artist"(
"id"
)
ON DELETECASCADE
ON UPDATECASCADE
);
-- CreateIndex
CREATEUNIQUEINDEX "User_email_key"
ON "User"("email");
-- CreateIndex
CREATEUNIQUEINDEX "User_username_key"
ON "User"("username");
-- CreateIndex
CREATEUNIQUEINDEX "ApiKey_key_key"
ON "ApiKey"("key");
-- CreateIndex
CREATEINDEX "ApiKey_key_idx"
ON "ApiKey"("key");
-- CreateIndex
CREATEUNIQUEINDEX "ApiKey_key_userId_key"
ON "ApiKey"("key", "userId");
-- CreateIndex
CREATEINDEX "Notification_userId_idx"
ON "Notification"("userId");
-- CreateIndex
CREATEINDEX "Note_ownerId_idx"
ON "Note"("ownerId");
-- CreateIndex
CREATEINDEX "Note_ownerId_updatedAt_idx"
ON "Note"("ownerId", "updatedAt");
-- CreateIndex
CREATEINDEX "NoteImage_noteId_idx"
ON "NoteImage"("noteId");
-- CreateIndex
CREATEUNIQUEINDEX "UserImage_userId_key"
ON "UserImage"("userId");
-- CreateIndex
CREATEUNIQUEINDEX "Password_userId_key"
ON "Password"("userId");
-- CreateIndex
CREATEINDEX "Session_userId_idx"
ON "Session"("userId");
-- CreateIndex
CREATEUNIQUEINDEX "Permission_action_entity_access_key"
ON "Permission"("action", "entity", "access");
-- CreateIndex
CREATEUNIQUEINDEX "Role_name_key"
ON "Role"("name");
-- CreateIndex
CREATEUNIQUEINDEX "Verification_target_type_key"
ON "Verification"("target", "type");
-- CreateIndex
CREATEUNIQUEINDEX "Connection_providerName_providerId_key"
ON "Connection"("providerName", "providerId");
-- CreateIndex
CREATEUNIQUEINDEX "Person_id_key"
ON "Person"("id");
-- CreateIndex
CREATEUNIQUEINDEX "Person_tmdbID_key"
ON "Person"("tmdbID");
-- CreateIndex
CREATEUNIQUEINDEX "PersonImage_id_key"
ON "PersonImage"("id");
-- CreateIndex
CREATEUNIQUEINDEX "Film_id_key"
ON "Film"("id");
-- CreateIndex
CREATEUNIQUEINDEX "Film_imdbID_key"
ON "Film"("imdbID");
-- CreateIndex
CREATEUNIQUEINDEX "Film_wikiDataID_key"
ON "Film"("wikiDataID");
-- CreateIndex
CREATEUNIQUEINDEX "Film_tmdbID_key"
ON "Film"("tmdbID");
-- CreateIndex
CREATEUNIQUEINDEX "FilmRecommendation_id_key"
ON "FilmRecommendation"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmCastMember_id_key"
ON "FilmCastMember"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmCrewMember_id_key"
ON "FilmCrewMember"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmPhoto_id_key"
ON "FilmPhoto"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmVideo_id_key"
ON "FilmVideo"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmTagline_id_key"
ON "FilmTagline"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmGenre_id_key"
ON "FilmGenre"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmGenre_name_key"
ON "FilmGenre"("name");
-- CreateIndex
CREATEUNIQUEINDEX "FilmKeyword_id_key"
ON "FilmKeyword"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmKeyword_name_key"
ON "FilmKeyword"("name");
-- CreateIndex
CREATEUNIQUEINDEX "FilmRating_filmId_userId_key"
ON "FilmRating"("filmId", "userId");
-- CreateIndex
CREATEUNIQUEINDEX "FilmReview_id_key"
ON "FilmReview"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmReview_filmId_userId_key"
ON "FilmReview"("filmId", "userId");
-- CreateIndex
CREATEUNIQUEINDEX "FilmAlternateTitle_id_key"
ON "FilmAlternateTitle"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmReleaseInformation_id_key"
ON "FilmReleaseInformation"("id");
-- CreateIndex
CREATEUNIQUEINDEX "FilmFavourite_id_key"
ON "FilmFavourite"("id");
-- CreateIndex
CREATEINDEX "FilmFavourite_filmId_userId_idx"
ON "FilmFavourite"("filmId", "userId");
-- CreateIndex
CREATEUNIQUEINDEX "ProductionCompany_id_key"
ON "ProductionCompany"("id");
-- CreateIndex
CREATEUNIQUEINDEX "ProductionCompany_name_key"
ON "ProductionCompany"("name");
-- CreateIndex
CREATEUNIQUEINDEX "Location_id_key"
ON "Location"("id");
-- CreateIndex
CREATEUNIQUEINDEX "Location_name_key"
ON "Location"("name");
-- CreateIndex
CREATEUNIQUEINDEX "Song_id_key"
ON "Song"("id");
-- CreateIndex
CREATEUNIQUEINDEX "Album_id_key"
ON "Album"("id");
-- CreateIndex
CREATEUNIQUEINDEX "Artist_id_key"
ON "Artist"("id");
-- CreateIndex
CREATEUNIQUEINDEX "SongRating_songId_userId_key"
ON "SongRating"("songId", "userId");
-- CreateIndex
CREATEUNIQUEINDEX "SongReview_id_key"
ON "SongReview"("id");
-- CreateIndex
CREATEUNIQUEINDEX "SongReview_songId_userId_key"
ON "SongReview"("songId", "userId");
-- CreateIndex
CREATEUNIQUEINDEX "SongFavourite_id_key"
ON "SongFavourite"("id");
-- CreateIndex
CREATEINDEX "SongFavourite_songId_userId_idx"
ON "SongFavourite"("songId", "userId");
-- CreateIndex
CREATEUNIQUEINDEX "_PermissionToRole_AB_unique"
ON "_PermissionToRole"("A", "B");
-- CreateIndex
CREATEINDEX "_PermissionToRole_B_index"
ON "_PermissionToRole"("B");
-- CreateIndex
CREATEUNIQUEINDEX "_RoleToUser_AB_unique"
ON "_RoleToUser"("A", "B");
-- CreateIndex
CREATEINDEX "_RoleToUser_B_index"
ON "_RoleToUser"("B");
-- CreateIndex
CREATEUNIQUEINDEX "_FilmToFilmGenre_AB_unique"
ON "_FilmToFilmGenre"("A", "B");
-- CreateIndex
CREATEINDEX "_FilmToFilmGenre_B_index"
ON "_FilmToFilmGenre"("B");
-- CreateIndex
CREATEUNIQUEINDEX "_FilmToFilmKeyword_AB_unique"
ON "_FilmToFilmKeyword"("A", "B");
-- CreateIndex
CREATEINDEX "_FilmToFilmKeyword_B_index"
ON "_FilmToFilmKeyword"("B");
-- CreateIndex
CREATEUNIQUEINDEX "_FilmToProductionCompany_AB_unique"
ON "_FilmToProductionCompany"("A", "B");
-- CreateIndex
CREATEINDEX "_FilmToProductionCompany_B_index"
ON "_FilmToProductionCompany"("B");
-- CreateIndex
CREATEUNIQUEINDEX "_AlbumToArtist_AB_unique"
ON "_AlbumToArtist"("A", "B");
-- CreateIndex
CREATEINDEX "_AlbumToArtist_B_index"
ON "_AlbumToArtist"("B");
--------------------------------- Manual Seeding --------------------------
-- Hey there, Kent here! This is how you can reliably seed your database with
-- some data. You edit the migration.sql file and that will handle it for you.
-- The user Roles and Permissions are seeded here.
-- If you'd like to customise roles and permissions, you can edit and add the code below to your `prisma/seed.ts` file.
-- Seed your development database with `npx prisma db seed`
-- Create a sql dump of your database with `sqlite3 prisma/data.db .dump > seed.sql`
-- Replace the SQL below with your new Roles & Permissions related SQL from `seed.sql`
-- console.time('🔑 Created permissions...')
-- const entities = ['user', 'note']
-- const actions = ['create', 'read', 'update', 'delete']
-- const accesses = ['own', 'any'] as const
-- let permissionsToCreate = []
-- for (const entity of entities) {
-- 	for (const action of actions) {
-- 		for (const access of accesses) {
-- 			permissionsToCreate.push({ entity, action, access })
-- 		}
-- 	}
-- }
-- await prisma.permission.createMany({ data: permissionsToCreate })
-- console.timeEnd('🔑 Created permissions...')
-- console.time('👑 Created roles...')
-- await prisma.role.create({
-- 	data: {
-- 		name: 'admin',
-- 		permissions: {
-- 			connect: await prisma.permission.findMany({
-- 				select: { id: true },
-- 				where: { access: 'any' },
-- 			}),
-- 		},
-- 	},
-- })
-- await prisma.role.create({
-- 	data: {
-- 		name: 'user',
-- 		permissions: {
-- 			connect: await prisma.permission.findMany({
-- 				select: { id: true },
-- 				where: { access: 'own' },
-- 			}),
-- 		},
-- 	},
-- })
-- console.timeEnd('👑 Created roles...')
INSERT INTO PermissionVALUES('cm2hmuujy0000otcer2tf1vqq','create','user','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0001otceca2k70g3','create','user','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0002otceb39w4yw2','read','user','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0003otce3ueeedk2','read','user','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0004otcenwtw5fdc','update','user','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0005otcenajecnt9','update','user','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0006otce215twozq','delete','user','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0007otce1b3rrqf4','delete','user','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0008otcepityzd3r','create','note','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy0009otceq7rzt3w6','create','note','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000aotceskfz6zoo','read','note','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000botceqvaxsjk6','read','note','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000cotce62bv0wu0','update','note','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000dotcet1ams9bf','update','note','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000eotce3j9xrgqp','delete','note','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000fotce3yiza6ao','delete','note','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000gotcew49lr8n5','create','film','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000hotcelb4m438i','create','film','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000iotce67co4p8d','read','film','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000jotcequm35enj','read','film','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000kotcex0gozj59','update','film','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000lotceudt23hfv','update','film','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000motceh18fxk1e','delete','film','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000notcenwdlwzrv','delete','film','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000ootce6i8i7cnp','create','filmReview','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000potcem3dcvokn','create','filmReview','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000qotcewq9qfc3e','read','filmReview','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000rotce1j4ao2fu','read','filmReview','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000sotcela6wg5ys','update','filmReview','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000totceb1mynx7t','update','filmReview','any','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000uotcexzlt8hdt','delete','filmReview','own','',1729431490607,1729431490607);
INSERT INTO PermissionVALUES('cm2hmuujy000votcecyd8h2lg','delete','filmReview','any','',1729431490607,1729431490607);
INSERT INTO RoleVALUES('cm2hmuuk5000wotceq1j4pt1n','admin','',1729431490613,1729431490613);
INSERT INTO RoleVALUES('cm2hmuuka000xotceebp7a5b6','user','',1729431490618,1729431490618);
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0001otceca2k70g3','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0003otce3ueeedk2','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0005otcenajecnt9','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0007otce1b3rrqf4','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0009otceq7rzt3w6','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000botceqvaxsjk6','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000dotcet1ams9bf','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000fotce3yiza6ao','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000hotcelb4m438i','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000jotcequm35enj','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000lotceudt23hfv','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000notcenwdlwzrv','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000potcem3dcvokn','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000rotce1j4ao2fu','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000totceb1mynx7t','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000votcecyd8h2lg','cm2hmuuk5000wotceq1j4pt1n');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0000otcer2tf1vqq','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0002otceb39w4yw2','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0004otcenwtw5fdc','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0006otce215twozq','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy0008otcepityzd3r','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000aotceskfz6zoo','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000cotce62bv0wu0','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000eotce3j9xrgqp','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000gotcew49lr8n5','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000iotce67co4p8d','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000kotcex0gozj59','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000motceh18fxk1e','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000ootce6i8i7cnp','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000qotcewq9qfc3e','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000sotcela6wg5ys','cm2hmuuka000xotceebp7a5b6');
INSERT INTO _PermissionToRoleVALUES('cm2hmuujy000uotcexzlt8hdt','cm2hmuuka000xotceebp7a5b6');
