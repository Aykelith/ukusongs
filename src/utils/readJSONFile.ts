//= Types & Enums & Consts
// Own
import { OfflineCacheName } from "../data/OfflineCacheName";

export async function readJSONFile(filePath: string): Promise<any> {
    const cache = await window.caches.open(OfflineCacheName);

    try {
        const response = await fetch(filePath);
        const [data] = await Promise.all([response.json(), cache.add(filePath)]);
        return data;
    } catch (error) {
        console.log("ERROR LOADING", filePath);
        const cacheResponse = await cache.match(filePath);

        if (!cacheResponse) throw new Error(error);
        return cacheResponse.json();
    }
}
