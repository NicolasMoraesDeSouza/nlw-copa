-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstTeamCountryCode" TEXT NOT NULL,
    "secondTeamCountryCode" TEXT NOT NULL
);
INSERT INTO "new_Game" ("date", "firstTeamCountryCode", "id", "secondTeamCountryCode") SELECT "date", "firstTeamCountryCode", "id", "secondTeamCountryCode" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
