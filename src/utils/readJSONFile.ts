export function readJSONFile(filePath: string): Promise<any> {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", filePath, true);

    const promise = new Promise((resolve) => {
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status == 200) {
                resolve(JSON.parse(rawFile.responseText));
            }
        };
    });

    rawFile.send(null);

    return promise;
}
