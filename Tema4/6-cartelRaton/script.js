"use strict";

document.addEventListener("mousemove", (evnt) => {
    const x = evnt.clientX;
    const y = evnt.clientY;

    const text = document.getElementById("texto-cursor");
    text.style.left = x + "px";
    text.style.top = y + "px";
    text.style.display = "block";
});