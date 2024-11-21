"use strict";

document.addEventListener("dblclick", () => {
    const randomColors = [
        "#F16A70",
        "#B1E5F2",
        "#7D4E57",
        "#FFD700",
        "#A8E6CF",
        "#FF6F61",
        "#3B5998",
        "#C71585",
        "#FFB6C1",
        "#00FA9A"
    ];

    const randomNumber = Math.floor(Math.random() * randomColors.length);
    document.body.style.backgroundColor = randomColors[randomNumber];
});