const POKEMON = "turtwig";

async function apiFetch(pokemon) {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => response.json());

    console.log("Aquí los datos del pokémon:");
    console.log("Nombre ", data.forms[0].name);
    console.log("URL:", data.forms[0].url);
    console.log("ID:", data.id);
    console.log("Altura:", data.height);
}

apiFetch(POKEMON);