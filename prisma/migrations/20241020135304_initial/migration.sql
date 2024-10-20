-- CreateTable
CREATE TABLE "User" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "email" TEXT NOT NULL,
  "username" TEXT NOT NULL,
  "name" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ApiKey" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "key" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "ApiKey_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Notification" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "read" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "userId" TEXT NOT NULL,
  CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Note" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "ownerId" TEXT NOT NULL,
  CONSTRAINT "Note_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NoteImage" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "altText" TEXT,
  "contentType" TEXT NOT NULL,
  "blob" BLOB NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "noteId" TEXT NOT NULL,
  CONSTRAINT "NoteImage_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "Note" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserImage" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "altText" TEXT,
  "contentType" TEXT NOT NULL,
  "blob" BLOB NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "userId" TEXT NOT NULL,
  CONSTRAINT "UserImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Password" (
  "hash" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  CONSTRAINT "Password_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "expirationDate" DATETIME NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "userId" TEXT NOT NULL,
  CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Permission" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "action" TEXT NOT NULL,
  "entity" TEXT NOT NULL,
  "access" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL DEFAULT '',
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Verification" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "type" TEXT NOT NULL,
  "target" TEXT NOT NULL,
  "secret" TEXT NOT NULL,
  "algorithm" TEXT NOT NULL,
  "digits" INTEGER NOT NULL,
  "period" INTEGER NOT NULL,
  "charSet" TEXT NOT NULL,
  "expiresAt" DATETIME
);

-- CreateTable
CREATE TABLE "Connection" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "providerName" TEXT NOT NULL,
  "providerId" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "userId" TEXT NOT NULL,
  CONSTRAINT "Connection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Person" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "knownForDepartment" TEXT,
  "biography" TEXT,
  "birthdate" DATETIME,
  "dayOfDeath" DATETIME,
  "gender" TEXT,
  "placeOfBirth" TEXT,
  "homepage" TEXT,
  "viewCount" INTEGER NOT NULL DEFAULT 0,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "tmdbID" TEXT,
  "image" TEXT DEFAULT '/images/placeholder/300x450.png'
);

-- CreateTable
CREATE TABLE "PersonImage" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "personId" TEXT NOT NULL,
  "filename" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "primary" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "PersonImage_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Film" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "overview" TEXT NOT NULL,
  "releaseDate" DATETIME,
  "ageRating" TEXT,
  "runtime" REAL,
  "language" TEXT DEFAULT 'English',
  "budget" REAL,
  "revenue" REAL,
  "status" TEXT,
  "voteAverage" REAL NOT NULL DEFAULT 0,
  "voteCount" INTEGER DEFAULT 0,
  "viewCount" INTEGER DEFAULT 0,
  "contentScore" REAL,
  "website" TEXT,
  "facebook" TEXT,
  "instagram" TEXT,
  "twitter" TEXT,
  "imdbID" TEXT,
  "wikiDataID" TEXT,
  "tmdbID" TEXT,
  "locked" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "poster" TEXT DEFAULT '/images/placeholder/300x450.png',
  "backdrop" TEXT DEFAULT '/images/placeholder/1920x1080.png',
  "trailer" TEXT DEFAULT 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  "tagline" TEXT,
  "productionCountries" TEXT
);

-- CreateTable
CREATE TABLE "FilmRecommendation" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "recommendedFilmId" TEXT NOT NULL,
  "similarity" REAL NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmRecommendation_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmRecommendation_recommendedFilmId_fkey" FOREIGN KEY ("recommendedFilmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmCastMember" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "numerator" INTEGER NOT NULL,
  "denominator" INTEGER NOT NULL,
  "character" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "filmId" TEXT NOT NULL,
  "personId" TEXT NOT NULL,
  CONSTRAINT "FilmCastMember_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmCastMember_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmCrewMember" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "department" TEXT NOT NULL,
  "job" TEXT NOT NULL,
  "featured" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  "filmId" TEXT NOT NULL,
  "personId" TEXT NOT NULL,
  CONSTRAINT "FilmCrewMember_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmCrewMember_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmPhoto" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "filename" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "language" TEXT DEFAULT 'English',
  "primary" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmPhoto_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmVideo" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "type" TEXT NOT NULL,
  "site" TEXT NOT NULL,
  "quality" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "language" TEXT DEFAULT 'English',
  "primary" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmVideo_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmTagline" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "tagline" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmTagline_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmGenre" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FilmKeyword" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FilmRating" (
  "filmId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "value" INTEGER NOT NULL DEFAULT 0,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmRating_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmReview" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmReview_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmReview_filmId_userId_fkey" FOREIGN KEY ("filmId", "userId") REFERENCES "FilmRating" ("filmId", "userId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmAlternateTitle" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "country" TEXT NOT NULL,
  "locked" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmAlternateTitle_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmReleaseInformation" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "country" TEXT,
  "language" TEXT DEFAULT 'English',
  "date" DATETIME NOT NULL,
  "classification" TEXT,
  "type" TEXT,
  "note" TEXT,
  "locked" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmReleaseInformation_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmEdit" (
  "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "model" TEXT NOT NULL,
  "operation" TEXT NOT NULL,
  "oldValues" TEXT,
  "newValues" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "userId" TEXT NOT NULL,
  "filmId" TEXT NOT NULL,
  CONSTRAINT "FilmEdit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT "FilmEdit_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FilmFavourite" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "filmId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "FilmFavourite_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "FilmFavourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ProductionCompany" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "location" TEXT,
  "country" TEXT,
  "logo" TEXT DEFAULT '/images/placeholder/300x450.png',
  "homepage" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Location" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Song" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "artist" TEXT NOT NULL,
  "duration" INTEGER NOT NULL,
  "locked" BOOLEAN DEFAULT false,
  "albumId" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "Song_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Album" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "year" INTEGER NOT NULL,
  "cover" TEXT DEFAULT '/images/placeholder/300x450.png',
  "locked" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Artist" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL,
  "personId" TEXT NOT NULL,
  "locked" BOOLEAN DEFAULT false,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "Artist_personId_fkey" FOREIGN KEY ("personId") REFERENCES "Person" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SongRating" (
  "songId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "value" INTEGER NOT NULL DEFAULT 0,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "SongRating_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "SongRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SongReview" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "songId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "SongReview_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "SongReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "SongReview_songId_userId_fkey" FOREIGN KEY ("songId", "userId") REFERENCES "SongRating" ("songId", "userId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SongFavourite" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "songId" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" DATETIME NOT NULL,
  CONSTRAINT "SongFavourite_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "SongFavourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PermissionToRole" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_PermissionToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Permission" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_PermissionToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FilmToFilmGenre" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_FilmToFilmGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_FilmToFilmGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "FilmGenre" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FilmToFilmKeyword" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_FilmToFilmKeyword_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_FilmToFilmKeyword_B_fkey" FOREIGN KEY ("B") REFERENCES "FilmKeyword" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_FilmToProductionCompany" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_FilmToProductionCompany_A_fkey" FOREIGN KEY ("A") REFERENCES "Film" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_FilmToProductionCompany_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductionCompany" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_AlbumToArtist" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL,
  CONSTRAINT "_AlbumToArtist_A_fkey" FOREIGN KEY ("A") REFERENCES "Album" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "_AlbumToArtist_B_fkey" FOREIGN KEY ("B") REFERENCES "Artist" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User" ("username");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_key" ON "ApiKey" ("key");

-- CreateIndex
CREATE INDEX "ApiKey_key_idx" ON "ApiKey" ("key");

-- CreateIndex
CREATE UNIQUE INDEX "ApiKey_key_userId_key" ON "ApiKey" ("key", "userId");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification" ("userId");

-- CreateIndex
CREATE INDEX "Note_ownerId_idx" ON "Note" ("ownerId");

-- CreateIndex
CREATE INDEX "Note_ownerId_updatedAt_idx" ON "Note" ("ownerId", "updatedAt");

-- CreateIndex
CREATE INDEX "NoteImage_noteId_idx" ON "NoteImage" ("noteId");

-- CreateIndex
CREATE UNIQUE INDEX "UserImage_userId_key" ON "UserImage" ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Password_userId_key" ON "Password" ("userId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session" ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_action_entity_access_key" ON "Permission" ("action", "entity", "access");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "Verification_target_type_key" ON "Verification" ("target", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Connection_providerName_providerId_key" ON "Connection" ("providerName", "providerId");

-- CreateIndex
CREATE UNIQUE INDEX "Person_id_key" ON "Person" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Person_tmdbID_key" ON "Person" ("tmdbID");

-- CreateIndex
CREATE UNIQUE INDEX "PersonImage_id_key" ON "PersonImage" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Film_id_key" ON "Film" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Film_imdbID_key" ON "Film" ("imdbID");

-- CreateIndex
CREATE UNIQUE INDEX "Film_wikiDataID_key" ON "Film" ("wikiDataID");

-- CreateIndex
CREATE UNIQUE INDEX "Film_tmdbID_key" ON "Film" ("tmdbID");

-- CreateIndex
CREATE UNIQUE INDEX "FilmRecommendation_id_key" ON "FilmRecommendation" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmCastMember_id_key" ON "FilmCastMember" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmCrewMember_id_key" ON "FilmCrewMember" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmPhoto_id_key" ON "FilmPhoto" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmVideo_id_key" ON "FilmVideo" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmTagline_id_key" ON "FilmTagline" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmGenre_id_key" ON "FilmGenre" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmGenre_name_key" ON "FilmGenre" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "FilmKeyword_id_key" ON "FilmKeyword" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmKeyword_name_key" ON "FilmKeyword" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "FilmRating_filmId_userId_key" ON "FilmRating" ("filmId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "FilmReview_id_key" ON "FilmReview" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmReview_filmId_userId_key" ON "FilmReview" ("filmId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "FilmAlternateTitle_id_key" ON "FilmAlternateTitle" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmReleaseInformation_id_key" ON "FilmReleaseInformation" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilmFavourite_id_key" ON "FilmFavourite" ("id");

-- CreateIndex
CREATE INDEX "FilmFavourite_filmId_userId_idx" ON "FilmFavourite" ("filmId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionCompany_id_key" ON "ProductionCompany" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductionCompany_name_key" ON "ProductionCompany" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "Location_id_key" ON "Location" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Location_name_key" ON "Location" ("name");

-- CreateIndex
CREATE UNIQUE INDEX "Song_id_key" ON "Song" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Album_id_key" ON "Album" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_id_key" ON "Artist" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "SongRating_songId_userId_key" ON "SongRating" ("songId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "SongReview_id_key" ON "SongReview" ("id");

-- CreateIndex
CREATE UNIQUE INDEX "SongReview_songId_userId_key" ON "SongReview" ("songId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "SongFavourite_id_key" ON "SongFavourite" ("id");

-- CreateIndex
CREATE INDEX "SongFavourite_songId_userId_idx" ON "SongFavourite" ("songId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionToRole_AB_unique" ON "_PermissionToRole" ("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionToRole_B_index" ON "_PermissionToRole" ("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser" ("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser" ("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToFilmGenre_AB_unique" ON "_FilmToFilmGenre" ("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToFilmGenre_B_index" ON "_FilmToFilmGenre" ("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToFilmKeyword_AB_unique" ON "_FilmToFilmKeyword" ("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToFilmKeyword_B_index" ON "_FilmToFilmKeyword" ("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FilmToProductionCompany_AB_unique" ON "_FilmToProductionCompany" ("A", "B");

-- CreateIndex
CREATE INDEX "_FilmToProductionCompany_B_index" ON "_FilmToProductionCompany" ("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumToArtist_AB_unique" ON "_AlbumToArtist" ("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumToArtist_B_index" ON "_AlbumToArtist" ("B");

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
INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0000128c6ksz42kq',
    'create',
    'user',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0001128cgfwcr3as',
    'create',
    'user',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0002128cczbb0fsy',
    'read',
    'user',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0003128chlam3g10',
    'read',
    'user',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0004128cjsenptu9',
    'update',
    'user',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0005128c3620zkju',
    'update',
    'user',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0006128c700emb4e',
    'delete',
    'user',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0007128cr7ze6ifp',
    'delete',
    'user',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0008128cewowoefy',
    'create',
    'note',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge0009128c1wkwnh0s',
    'create',
    'note',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000a128caea4yu7r',
    'read',
    'note',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000b128czbmlapu5',
    'read',
    'note',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000c128cmisb8f7x',
    'update',
    'note',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000d128cztzca087',
    'update',
    'note',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000e128c9isnfc5c',
    'delete',
    'note',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000f128c1afyb3nc',
    'delete',
    'note',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000g128cvrg6qysp',
    'create',
    'film',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000h128c0882w631',
    'create',
    'film',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000i128cl3oryrxu',
    'read',
    'film',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000j128cpsdtosv7',
    'read',
    'film',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000k128cb7wn20zn',
    'update',
    'film',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000l128c2kpiqxrn',
    'update',
    'film',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000m128clywi68k8',
    'delete',
    'film',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000n128cb9nbch54',
    'delete',
    'film',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000o128c51062wbf',
    'create',
    'filmReview',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000p128cko61ay7t',
    'create',
    'filmReview',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000q128ccyscgpey',
    'read',
    'filmReview',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000r128ck37tjrw7',
    'read',
    'filmReview',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000s128cdvxi940y',
    'update',
    'filmReview',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000t128ci39iorf0',
    'update',
    'filmReview',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000u128ccacp3k2q',
    'delete',
    'filmReview',
    'own',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Permission
VALUES
  (
    'cm2hnshge000v128c3v7xn7ff',
    'delete',
    'filmReview',
    'any',
    '',
    1729433059934,
    1729433059934
  );

INSERT INTO
  Role
VALUES
  (
    'cm2hnshgp000w128ctns5z6wk',
    'admin',
    '',
    1729433059946,
    1729433059946
  );

INSERT INTO
  Role
VALUES
  (
    'cm2hnshgw000x128c66oa8xp2',
    'user',
    '',
    1729433059952,
    1729433059952
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0001128cgfwcr3as',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0003128chlam3g10',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0005128c3620zkju',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0007128cr7ze6ifp',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0009128c1wkwnh0s',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000b128czbmlapu5',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000d128cztzca087',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000f128c1afyb3nc',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000h128c0882w631',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000j128cpsdtosv7',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000l128c2kpiqxrn',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000n128cb9nbch54',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000p128cko61ay7t',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000r128ck37tjrw7',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000t128ci39iorf0',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000v128c3v7xn7ff',
    'cm2hnshgp000w128ctns5z6wk'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0000128c6ksz42kq',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0002128cczbb0fsy',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0004128cjsenptu9',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0006128c700emb4e',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge0008128cewowoefy',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000a128caea4yu7r',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000c128cmisb8f7x',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000e128c9isnfc5c',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000g128cvrg6qysp',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000i128cl3oryrxu',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000k128cb7wn20zn',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000m128clywi68k8',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000o128c51062wbf',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000q128ccyscgpey',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000s128cdvxi940y',
    'cm2hnshgw000x128c66oa8xp2'
  );

INSERT INTO
  _PermissionToRole
VALUES
  (
    'cm2hnshge000u128ccacp3k2q',
    'cm2hnshgw000x128c66oa8xp2'
  );
