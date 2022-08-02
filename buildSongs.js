//= Functions
// Others
const fs = require("fs-extra");
const path = require("path");

const PublicPath = path.join(__dirname, "public");
const ActualSongsPath = path.join(__dirname, "songs");
const ProductionSongsPath = path.join(PublicPath, "songs");

if (fs.existsSync(ProductionSongsPath)) fs.removeSync(ProductionSongsPath);
fs.mkdirpSync(ProductionSongsPath);

fs.readdirSync(ActualSongsPath).forEach(fileName => {
    let songData;
    try {
        songData = JSON.parse(fs.readFileSync(path.join(ActualSongsPath, fileName), "utf-8"));
    } catch (error) {
        console.error(`Error in song "${fileName}":`, error);
        return;
    }

    fs.writeFileSync(path.join(ProductionSongsPath, fileName), JSON.stringify(songData), "utf-8");
});

