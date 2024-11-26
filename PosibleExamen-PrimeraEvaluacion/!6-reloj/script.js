const buttonUsername = document.getElementById("buttonUsername");
const buttonSegundos = document.getElementById("buttonSegundos");

const capitalize = (str) => String(str).charAt(0).toUpperCase() + String(str).slice(1);


buttonUsername.addEventListener("click", () => {
    let username = prompt("Dame el nombre que quieres que se muestre: ");

    document.getElementById("username").textContent = " " + capitalize(username);
});

buttonSegundos.addEventListener("click", () => {

});

setInterval(() => {

}, 1000);