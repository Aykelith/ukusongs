//= Functions
// Own
import { readJSONFile } from "../utils/readJSONFile";
// Others
import { useState, useRef, useEffect } from "react";

type SongCatalogItem = { name: string; file: string; key: string };
type SongsCatalog = SongCatalogItem[];
type Song = {
    name: string;
    key: string;
    song: {
        name: string;
        verses: string[];
    }[];
};

export type HomePageProps = {};

export default function HomePage({}: HomePageProps) {
    const [currentSongsCatalog, setCurrentSongsCatalog] = useState<SongsCatalog>([]);
    const [showingSongName, showSongName] = useState<string>("");
    const [loadingCatalog, setLoadingCatalog] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const songCompleteData = useRef<Song>(null);
    const allSongsCatalog = useRef<SongsCatalog>(null);

    const showSong = async (songData: SongCatalogItem) => {
        if (showingSongName === songData.name) {
            showSongName("");
            return;
        }

        setLoading(true);

        songCompleteData.current = await readJSONFile(`/songs/${songData.file}`);
        showSongName(songData.name);

        setLoading(false);
    };

    const initialize = async () => {
        setLoadingCatalog(true);

        if (navigator.storage && navigator.storage.persist) {
            const isPersisted = await navigator.storage.persisted();

            console.log(`Persisted storage granted: ${isPersisted}`);
        }

        allSongsCatalog.current = (await readJSONFile(`/songs.json`)).songs;
        setCurrentSongsCatalog(allSongsCatalog.current);

        console.log(await window.caches.keys());

        setLoadingCatalog(false);
    };

    useEffect(() => {
        initialize();
    }, []);

    return (
        <main className="w-full lg:box flex flex-col">
            <div className="w-full px-3 py-1 border-b-2 border-b-[#444444]">
                <input type="text" placeholder="Cauta..." className="w-full bg-[#444444] rounded text-lg sticky top-0 py-1 px-3" />
            </div>
            {currentSongsCatalog.map((songData) => (
                <button key={songData.name} className="w-full py-3 border-b border-b-[#444444]" onClick={() => showSong(songData)}>
                    <span className="text-lg">{songData.name}</span>
                    <span className="ml-4 bg-[#DA0037] rounded px-1 text-lg font-bold">{songData.key}</span>
                </button>
            ))}
            {loadingCatalog && <div className="w-full py-4 flex items-center justify-center italic">Se incarca...</div>}
            {loading && (
                <div className="w-full h-full top-0 left-0 flex items-center justify-center italic bg-[rgba(0,0,0,.4)] fixed">Se incarca...</div>
            )}
            {showingSongName !== "" && (
                <div className="w-full h-full bg-[rgba(0,0,0,.4)] fixed top-0 left-0 flex justify-center items-center">
                    <div className="w-full h-full lg:w-4/6 lg:h-5/6 bg-[#444444] relative rounded shadow">
                        <button
                            className="absolute z-20 -top-5 -right-5 font-bold text-3xl rounded-full px-2 py-1 bg-[#EDEDED] text-[#DA0037] w-10 h-10 cursor-pointer shadow"
                            onClick={() => showSongName("")}
                        >
                            <div className="absolute left-[.7rem] top-[-.05rem]">x</div>
                        </button>
                        <div className="w-full h-full py-3 px-4 overflow-y-auto">
                            <div className="">
                                <span className="text-lg font-bold">{songCompleteData.current.name}</span>
                                <span className="ml-4 bg-[#DA0037] rounded px-1 text-lg font-bold">{songCompleteData.current.key}</span>
                            </div>
                            <div className="mt-3 text-lg flex flex-col gap-8">
                                {songCompleteData.current.song.map((songVerses) => {
                                    return (
                                        <div key={songVerses.name}>
                                            <div className="font-bold">{songVerses.name}</div>
                                            {songVerses.verses.map((verse, index) => {
                                                const haveKeys = verse.includes("(");
                                                if (haveKeys) {
                                                    let keyVerse: string = "";
                                                    let previousIndex = 0;
                                                    let indexOfKey = verse.indexOf("(");
                                                    while (indexOfKey != -1) {
                                                        for (let i = previousIndex; i < indexOfKey; ++i) {
                                                            keyVerse += " ";
                                                        }

                                                        const key = verse.substring(indexOfKey + 1, verse.indexOf(")", indexOfKey));
                                                        keyVerse += `<span style="color: #f8ccd7;">${key}</span>`;
                                                        previousIndex = indexOfKey + 2 * key.length + 2;
                                                        indexOfKey = verse.indexOf("(", indexOfKey + 1);
                                                    }

                                                    return [
                                                        <div
                                                            key={`${index}a`}
                                                            className="whitespace-pre leading-[0.5] mt-3"
                                                            dangerouslySetInnerHTML={{ __html: keyVerse }}
                                                        ></div>,
                                                        <div key={`${index}b`} className="whitespace-pre">
                                                            {verse.replace(/\((.*?)\)/g, "")}
                                                        </div>,
                                                    ];
                                                } else {
                                                    return <div key={index} className="whitespace-pre">{verse}</div>;
                                                }
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
