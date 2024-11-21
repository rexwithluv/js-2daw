"use strict";

let keyPressed = [];

document.addEventListener("keyup", (ev) => keyPressed = []);

document.addEventListener("keydown", (ev) => {
    keyPressed.push(ev.key);

    if (keyPressed.includes("Alt") && keyPressed.includes("F12")) {

        const url = "https://picsum.photos/1920/1080";
        // Hacemos la petición a la API
        fetch(url)
            .then((response) => {
                const image = response.url;
                document.body.style.backgroundImage = `url(${image})`;
            });
    }
});