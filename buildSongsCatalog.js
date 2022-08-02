//= Functions
// Others
const fs = require("fs");
const path = require("path");

const PublicPath = path.join(__dirname, "public");
const SongsPath = path.join(__dirname, "songs");
const SongsCatalogFilePath = path.join(PublicPath, "songs.json");

let songsCatalog = { lastUpdate: Date.now(), songs: [] };
fs.readdirSync(SongsPath).forEach(fileName => {
    let songData;
    try {
        songData = JSON.parse(fs.readFileSync(path.join(SongsPath, fileName), "utf-8"));
    } catch (error) {
        console.error(`Error in song "${fileName}":`, error);
        return;
    }

    songsCatalog.songs.push({ firstLetter: songData.name.substring(0, 1), name: songData.name, file: fileName, key: songData.key });
});

fs.writeFileSync(SongsCatalogFilePath, JSON.stringify(songsCatalog));
