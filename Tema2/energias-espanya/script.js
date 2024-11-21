const ENERGIA = {
    "2011": 257.0,
    "2012": 297.0,
    "2013": 343.0,
    "2014": 258.0,
    "2015": 285.0,
    "2016": 255.0,
    "2017": 175.0,
    "2018": 319.0,
    "2019": 230.0,
    "2020": 191.0,
    "2021": 250.0,
    "2022": 200.0,
    "2023": 180.0
};

const ENERGIA_VALUES = Object.values(ENERGIA);

const ENERGIA_TOTAL = ENERGIA_VALUES.reduce((acc, anyo) => acc + anyo, 0);
document.getElementById("total").innerHTML = ENERGIA_TOTAL + "MW";

const ENERGIA_MEDIA = ENERGIA_VALUES.reduce((acc, anyo) => acc + anyo, 0) / ENERGIA_VALUES.length;
document.getElementById("media").innerHTML = Math.round(ENERGIA_MEDIA * 100) / 100 + "MW";

const anyoMax = (dictEnergia) => {
    let anyoMax = Object.keys(dictEnergia)[0];
    let energiaMax = Object.values(dictEnergia)[0];

    for (let key in dictEnergia) {
        if (dictEnergia[key] > energiaMax) {
            anyoMax = key;
            energiaMax = dictEnergia[key];
        }
    }

    return anyoMax;
}
document.getElementById("anyoMax").innerHTML = anyoMax(ENERGIA) + "MW";

const anyoMin = (dictEnergia) => {
    let anyoMin = Object.keys(dictEnergia)[0];
    let energiaMin = Object.values(dictEnergia)[0];

    for (let key in dictEnergia) {
        if (dictEnergia[key] < energiaMin) {
            anyoMin = key;
            energiaMin = dictEnergia[key];
        }
    }

    return anyoMin;
}
document.getElementById("anyoMin").innerHTML = anyoMin(ENERGIA) + "MW";

const ANYOS_MAS_200 = (dictEnergia) => {
    let anyos = [];

    for (let anyo in dictEnergia) {
        if (dictEnergia[anyo] > 200) {
            anyos.push(anyo);
        }
    }

    return anyos;
};
document.getElementById("anyo200").innerHTML = ANYOS_MAS_200(ENERGIA).join(", ");