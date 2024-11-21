function esBisiesto(anyo) {
    anyo = anyo.toString();
    if (anyo.substring(anyo.length - 2) == "00") {
        return anyo % 400 == 0;
    }
    return anyo % 4 == 0;
}

console.log(esBisiesto(2500));