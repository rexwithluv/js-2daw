"use strict";

const invertirMap = (map) => {
    let newMap = new Map();
    for (const [key, value] of map) {

        if (newMap.has(value)) {
            newMap.get(value).push(key);
        } else {
            newMap.set(value, [key]);
        }
        
    }

    return newMap;
}

const MAP_INICIAL = ([
    [1, "Óptimo"],
    [2, "Notable"],
    [3, "Notable"],
    [4, "Excelente"],
    [5, "Mejorable"],
    [6, "Excelente"],
    [7, "Notable"],
]);

const MAP_FINAL = invertirMap(MAP_INICIAL);

console.log(MAP_FINAL);