//= Functions
// Own
import { readJSONFile } from "../utils/readJSONFile";
// Others
import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

//= Types & Enums & Consts
// Own
import { OfflineCacheName } from "../data/OfflineCacheName";

//= Assets
// Own
import CogSVG from "../icons/gear.svg";

const KeysCount = 12;

const KeysMap = {
    C: 0,
    G: 1,
    D: 2,
    A: 3,
    E: 4,
    B: 5,
    "F#": 6,
    Db: 7,
    Ab: 8,
    Eb: 9,
    Bb: 10,
    F: 11,
    a: 0,
    e: 1,
    b: 2,
    "f#": 3,
    "c#": 4,
    "g#": 5,
    eb: 6,
    bb: 7,
    f: 8,
    c: 9,
    g: 10,
    d: 11,
};

const KeysMaj = [
    ["C", "C"],
    ["G", "G"],
    ["D", "D"],
    ["A", "A"],
    ["E", "E"],
    ["B", "B"],
    ["F#", "F#"],
    ["Db", "Db"],
    ["Ab", "Ab"],
    ["Eb", "Eb"],
    ["Bb", "Bb"],
    ["F", "F"],
];

const KeysMin = [
    ["a", "Am"],
    ["e", "Em"],
    ["b", "Bm"],
    ["f#", "F#m"],
    ["c#", "C#m"],
    ["g#", "G#m"],
    ["eb", "Ebm"],
    ["bb", "Bbm"],
    ["f", "Fm"],
    ["c", "Cm"],
    ["g", "Gm"],
    ["d", "Dm"],
];

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
    const [showingSettings, showSettings] = useState<boolean>(false);
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
            <div className="w-full px-3 py-1 border-b-2 border-b-[#444444] flex sticky top-0 bg-[#171717]">
                <input type="text" placeholder="Cauta..." className="flex-1 bg-[#444444] rounded text-lg sticky top-0 py-1 px-3" />
                <button className="px-2 ml-3" onClick={() => showSettings(true)}>
                    <CogSVG className="w-6 h-6 fill-white" />
                </button>
            </div>
            {currentSongsCatalog.map((songData, index) => (
                <button key={songData.name} className="w-full py-3 px-3 border-b border-b-[#444444]" onClick={() => showSong(songData)}>
                    <span className="mr-4 text-gray-700">{index + 1}</span>
                    <span className="text-lg">{songData.name}</span>
                    <span className="ml-4 bg-[#DA0037] rounded px-1 text-lg font-bold">{songData.key}</span>
                </button>
            ))}
            {loadingCatalog && <div className="w-full py-4 flex items-center justify-center italic">Se incarca...</div>}
            {loading && (
                <div className="w-full h-full top-0 left-0 flex items-center justify-center italic bg-[rgba(0,0,0,.4)] fixed">
                    Se incarca...
                </div>
            )}
            {(showingSongName !== "" || showingSettings === true) && (
                <div className="w-full h-full bg-[rgba(0,0,0,.4)] fixed top-0 left-0 flex justify-center items-center">
                    {showingSongName !== "" && <SongModal songCompleteData={songCompleteData.current} onExit={() => showSongName("")} />}
                    {showingSettings === true && (
                        <SettingsModal songsCatalog={allSongsCatalog.current} onExit={() => showSettings(false)} />
                    )}
                </div>
            )}
        </main>
    );
}

type ModalProps = React.PropsWithChildren<{
    title: React.ReactNode;
    onExit: () => any;
    className?: string;
}>;

function Modal({ title, onExit, className, children }: ModalProps) {
    return (
        <div className={classNames("bg-[#444444] relative rounded shadow", className)}>
            <div className="w-full h-full overflow-y-hidden overflow-x-hidden flex flex-col">
                <div className="bg-[#171717] flex items-center justify-between gap-4 px-4 py-2 shadow rounded-t w-full">
                    {title}
                    <button
                        className="font-bold text-xl rounded px-2 bg-[#EDEDED] text-[#171717] h-6 cursor-pointer shadow relative flex justify-center items-center"
                        onClick={onExit}
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

type SongModalProps = Pick<ModalProps, "onExit"> & {
    songCompleteData: Song;
};

function SongModal({ songCompleteData, onExit }: SongModalProps) {
    const [keysVariant, setKeysVariant] = useState<number>(0);
    const [key, setKey] = useState<string>(songCompleteData.key);
    const keyDifference = useRef<number>(0);

    const isMajore = songCompleteData.key.charCodeAt(0) <= 90;

    const onKeyChange: React.SelectHTMLAttributes<HTMLSelectElement>["onChange"] = (event) => {
        const newKey = event.target.value;

        const newKeyIndex = KeysMap[newKey];

        keyDifference.current = newKeyIndex - KeysMap[songCompleteData.key];
        setKey(newKey);
    };

    return (
        <Modal
            className="w-full h-full lg:w-4/6 lg:h-5/6"
            title={
                <div className="flex justify-center items-center">
                    <span className="text-lg font-bold truncate max-w-[200px]">{songCompleteData.name}</span>
                    {/*<span className="ml-4 bg-[#DA0037] rounded px-1 text-lg font-bold">{songCompleteData.key}</span>*/}
                    <select className="text-[#171717] w-14 rounded px-2 py-1 ml-4" value={key} onChange={onKeyChange}>
                        {isMajore
                            ? KeysMaj.map((key) => (
                                  <option key={key[0]} value={key[0]}>
                                      {key[keysVariant]}
                                      {key[0] === songCompleteData.key ? " (original)" : ""}
                                  </option>
                              ))
                            : KeysMin.map((key) => (
                                  <option key={key[0]} value={key[0]}>
                                      {key[keysVariant]}
                                      {key[0] === songCompleteData.key ? " (original)" : ""}
                                  </option>
                              ))}
                    </select>
                </div>
            }
            onExit={onExit}
        >
            <div className="text-lg flex flex-col gap-8 py-3 px-4 overflow-y-auto overflow-x-auto flex-1">
                {songCompleteData.song.map((songVerses) => {
                    return (
                        <div key={songVerses.name}>
                            <div className="font-bold">{songVerses.name}</div>
                            {songVerses.verses.map((verse, index) => {
                                const haveKeys = verse.includes("(");
                                if (haveKeys) {
                                    let keyVerse: string = "";
                                    let skipSpacesCount: number = 0;
                                    let previousIndex = 0;
                                    let indexOfKey = verse.indexOf("(");
                                    while (indexOfKey != -1) {
                                        for (let i = previousIndex; i < indexOfKey - skipSpacesCount; ++i) {
                                            keyVerse += " ";
                                        }

                                        let key = verse.substring(indexOfKey + 1, verse.indexOf(")", indexOfKey));
                                        let keyLabel = key;
                                        if (keyDifference.current !== 0) {
                                            const newKey = calculateNewKey(key, keyDifference.current, keysVariant);
                                            skipSpacesCount = newKey.length - key.length;
                                            //if (indexOfKey < 0) indexOfKey = 0;
                                            keyLabel = newKey;
                                        }
                                        keyVerse += `<span style="color: #f8ccd7;">${keyLabel}</span>`;
                                        previousIndex = indexOfKey + 2 * key.length + 2;
                                        //console.log(key, indexOfKey, previousIndex);
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
                                    return (
                                        <div key={index} className="whitespace-pre">
                                            {verse}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}

function calculateNewKey(key: string, keyDifference: number, keyVariant: number): string {
    let justKey = key[0];
    if (key.length > 1) {
        if (key[1] === "#") justKey += "#";
        else if (key[1] === "b") justKey += "b";
    }

    if (KeysMap[justKey] === undefined) return "";

    const isMajore = justKey.charCodeAt(0) <= 90;
    let restOfKey = justKey.length < key.length ? key.substring(justKey.length) : "";

    for (let i = 0; i < restOfKey.length; ++i) {
        if (KeysMap[restOfKey[i]] !== undefined) {
            restOfKey = restOfKey.substring(0, i) + calculateNewKey(restOfKey.substring(i), keyDifference, keyVariant);
            break;
        }
    }

    let newIndex = KeysMap[justKey] + keyDifference;
    if (newIndex >= KeysCount) newIndex -= KeysCount;
    if (newIndex < 0) newIndex += KeysCount;

    /*console.log(
        key,
        isMajore,
        keyDifference,
        justKey,
        restOfKey,
        KeysMap[justKey],
        newIndex,
        isMajore ? `${KeysMaj[newIndex][keyVariant]}${restOfKey}` : `${KeysMin[newIndex][keyVariant]}${restOfKey}`
    );*/

    return isMajore ? `${KeysMaj[newIndex][keyVariant]}${restOfKey}` : `${KeysMin[newIndex][keyVariant]}${restOfKey}`;
}

type SettingsModalProps = Pick<ModalProps, "onExit"> & {
    songsCatalog: SongsCatalog;
};

function SettingsModal({ songsCatalog, onExit }: SettingsModalProps) {
    const onReloadCacheClick = async () => {
        const cache = await window.caches.open(OfflineCacheName);

        let promises: Promise<void>[] = [];
        promises.push(cache.add(`/songs.json`));

        for (const song of songsCatalog) {
            promises.push(cache.add(`/songs/${song.file}`));
        }

        await Promise.all(promises);
    };

    return (
        <Modal
            className="w-5/6 h-5/6 lg:w-2/6 lg:h-3/6"
            title={
                <div className="flex justify-center items-center">
                    <span className="text-lg font-bold">Settings</span>
                </div>
            }
            onExit={onExit}
        >
            <div className="text-lg flex flex-col overflow-y-auto overflow-x-auto flex-1">
                <div className="border-b border-b-[#171717] py-2 px-3">
                    <button className="rounded-lg bg-[#171717] py-1 px-3" onClick={onReloadCacheClick}>
                        Reload cache
                    </button>
                </div>
            </div>
        </Modal>
    );
}
