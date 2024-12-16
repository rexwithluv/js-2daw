// No fui capaz de manejar la respuesta del servidor y debido a la poca documentación
// que existe respecto a este hice la función a mano
function esPrimo(num) {
    if (num < 2) return true;

    let mitad = num / 2;
    for (let i = 2; i < mitad; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function esPalindromo(num) {
    return num.toString() === (num.toString().split("")).reverse().join("");
}

$("#form").on("submit", (event) => {
    event.preventDefault();

    let num = $("#numero").val();

    $("#primo").text(esPrimo(num) ? "SÍ" : "NO");
    $("#palindromo").text(esPalindromo(num) ? "SÍ" : "NO");

    $("#respuesta").removeAttr("hidden");
});