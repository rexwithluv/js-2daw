"use strict";

const carga = document.getElementById("carga");

const IMAGES = 10;
let counter = 1;

const TIME = 1000;

let promises = [];

const interval = setInterval(() => {
    if (counter <= IMAGES) {
        const url = "https://picsum.photos/70";
        // Hacemos la petición a la API
        const fetchPromise = fetch(url)
            .then((response) => {
                const image = response.url;
                let img = document.createElement("img");
                img.src = image;
                carga.prepend(img);
            });

        promises.push(fetchPromise);
    }

    if (counter == IMAGES + 1) {
        clearInterval(interval);

        Promise.all(promises).then(() => {
            let descarga = document.createElement("h4");
            descarga.textContent = "Fotos descargadas!"
            carga.append(descarga);
        });
    };

    counter++;
}, TIME);
