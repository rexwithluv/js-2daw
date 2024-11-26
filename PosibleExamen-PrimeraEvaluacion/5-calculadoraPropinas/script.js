document.getElementById("form").addEventListener("submit", (ev) => {
    ev.preventDefault();

    const campoResultado = document.getElementById("cuentaTotal");
    const dinero = document.getElementById("dinero");
    const porcentajePropina = document.getElementById("porcentaje");

    const calculo = dinero.value * (parseFloat(porcentajePropina.value) / 100)
    campoResultado.textContent = calculo + "€";
});