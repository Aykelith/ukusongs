const jsYAML = require("js-yaml");
const fs = require("fs");
const path = require("path");

fs.readdirSync(path.join(__dirname, "tmp")).forEach(tmpFileName => {
    fs.unlinkSync(path.join(__dirname, "tmp", tmpFileName))
});

fs.copyFileSync(path.join(__dirname, "src", "index.js"), path.join(__dirname, "tmp", "index.js"));
fs.copyFileSync(path.join(__dirname, "src", "App.jsx"), path.join(__dirname, "tmp", "App.jsx"));

const filesNames = fs.readdirSync(path.join(__dirname, "songs"));

let songsItemsImportsFiles = [];

const SongContentLineBeggining = "\t\t\t\t\t";

for (const fileName of filesNames) {
    const filePath = path.join(__dirname, "songs", fileName);

    const songData = jsYAML.safeLoad(fs.readFileSync(filePath, 'utf8'));
    const title = songData.title.replace(/\s/g, "_").replace(/[^a-zA-Z0-9]/g, "");

    const songItemImportFile = `./SongItem_${title}.jsx`;
    const songImportFile = `./Song_${title}.jsx`;

    songsItemsImportsFiles.push([title, songItemImportFile]);

    let SongItemFile = fs.readFileSync(path.join(__dirname, "src", "SongItem.jsx"), "utf-8");
    SongItemFile = SongItemFile.replace("/* G_SONG_FILENAME */", `"./${songImportFile}"`);
    fs.writeFileSync(path.join(__dirname, "tmp", songItemImportFile), SongItemFile);

    let SongFile = fs.readFileSync(path.join(__dirname, "src", "Song.jsx"), "utf-8");
    
    SongFile = SongFile.replace("export default class Song", `export default class Song${title}`);
    SongFile = SongFile.replace("{ /* G_SONG_TITLE */ }", songData.title);
    SongFile = SongFile.replace(
        "{ /* G_SONG_CONTENT */ }", 
        songData.song
            .split("\n")
            .map(songLine => {
                if (songLine[0] == "&") {
                    return `${SongContentLineBeggining}{ this.renderChord("${songLine.substring(1)}") }`;
                } else if (songLine[0] == "*") {
                    return `${SongContentLineBeggining}{ this.recordLyric("${songLine.substring(1)}") }`;
                } else {
                    return `${SongContentLineBeggining}<br/>`;
                }
            })
            .join("\n")
    );

    fs.writeFileSync(path.join(__dirname, "tmp", songImportFile), SongFile);
}

let AppFile = fs.readFileSync(path.join(__dirname, "tmp", "App.jsx"), "utf-8");

AppFile = AppFile.replace(
    "/* G_SONGS_IMPORTS */", 
    songsItemsImportsFiles
        .map(data => {
            return `import SongItem_${data[0]} from "${data[1]}"`;
        })
        .join("\n")
);

AppFile = AppFile.replace(
    "{ /* G_SONGS_LIST */ }", 
    songsItemsImportsFiles
        .map(data => {
            return `<SongItem_${data[0]}/>`;
        })
        .join("\n")
);

fs.writeFileSync(path.join(__dirname, "tmp", "App.jsx"), AppFile);