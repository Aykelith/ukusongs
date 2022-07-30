//= Functions
// Own
import { readJSONFile } from "../utils/readJSONFile";
// Others
import { useState, useRef, useEffect } from "react";
import { openDB } from "idb";

//= Types & Enums & Consts
// Others
import { IDBPDatabase, IDBPObjectStore, IDBPTransaction } from "idb";

const OSSongsName = "songs";
const OSLastUpdateName = "lastUpdate";

type SongCatalogItem ={ name: string; file: string; key: string }; 
type SongsCatalog = SongCatalogItem[];
type Song = {
    name: string;
    key: string;
};

export type HomePageProps = {};

export default function HomePage({}: HomePageProps) {
    const [songsCatalog, setSongsCatalog] = useState<SongsCatalog>([]);
    const [showingSongName, showSongName] = useState<string>("");
    const songCompleteData = useRef<Song>(null);

    const showSong = async (songData: SongCatalogItem) => {
        if (showingSongName === songData.name) {
            showSongName("");
            return;
        }

        songCompleteData.current = await readJSONFile(`/songs/${songData.file}`);
        showSongName(songData.name);
    }

    const initialize = async () => {
        const db = await openDB("songs", 1, {
            upgrade(db, _oldVersion, _newVersion, _transaction) {
                const songsStore = db.createObjectStore("songs", { keyPath: "name" });
                songsStore.createIndex("firstLetter", "firstLetter", { unique: false });
                songsStore.createIndex("key", "key", { unique: false });

                db.createObjectStore("lastUpdate", { keyPath: "name" });
            },
        });

        if (navigator.onLine) {
            let offlineLastUpdate: any;

            {
                const { store: lastUpdateStore, tx: lastUpdateTx } = getDBObjectStore(db, OSLastUpdateName);
                offlineLastUpdate = (await lastUpdateStore.get("lastUpdate"))?.lastUpdate;
                await lastUpdateTx.done;
            }

            const catalog = await readJSONFile("/songs.json");

            console.log(offlineLastUpdate, catalog.lastUpdate);

            if (offlineLastUpdate != catalog.lastUpdate) {
                const { store: songsStore, tx: songsTx } = getDBObjectStore(db, OSSongsName, "readwrite");

                await Promise.all(catalog.songs.map((song: Song) => songsStore.put(song)));

                await songsTx.done;

                const { store: lastUpdateStore, tx: lastUpdateTx } = getDBObjectStore(db, OSLastUpdateName, "readwrite");
                await lastUpdateStore.put({ name: "lastUpdate", lastUpdate: catalog.lastUpdate });
                await lastUpdateTx.done;
            }
        }

        const range = IDBKeyRange.bound("A", "Z");
        const { store: songsStore, tx: songsTx } = getDBObjectStore(db, OSSongsName);

        let newSongsCatalog: SongsCatalog = [];
        let songsCursor = await songsStore.openCursor(range);

        while (songsCursor) {
            newSongsCatalog.push(songsCursor.value);
            songsCursor = await songsCursor.continue();
        }

        setSongsCatalog(newSongsCatalog);

        await songsTx.done;
    };

    useEffect(() => {
        initialize();
    });

    return (
        <main className="w-full lg:box flex flex-col">
            {songsCatalog.map((songData) => {
                return [
                    <button key={songData.name} className="w-full py-3" onClick={() => showSong(songData)}>{songData.name}{" "}{songData.key}</button>,
                    showingSongName === songData.name && <div key="songKeys">{JSON.stringify(songCompleteData.current)}</div>
                ];
            })}
        </main>
    );
}

function getDBObjectStore<Name extends string, Mode extends IDBTransactionMode>(
    db: IDBPDatabase,
    name: string,
    transactionMode: IDBTransactionMode = "readonly",
    __tryNo = 1
): { store: IDBPObjectStore<unknown, [Name], Name, Mode>; tx: IDBPTransaction<unknown, [Name], Mode> } {
    const tx = db.transaction(name as Name, transactionMode as Mode, { durability: "strict" });
    const store = tx.objectStore(name as Name);
    return { store, tx };
}
