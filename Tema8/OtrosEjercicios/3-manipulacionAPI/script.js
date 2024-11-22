// Request a una API que devuelve datos ficticios
const users = await fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json());

// Revisamos todas las personas
console.log("Todos los usuarios:")
for (let i = 0; i < users.length; i++) {
    console.log(`Usuario ${i + 1}: ${users[i].name} | @${users[i].username.toLowerCase()}`);
}

console.log("\nUsuarios cuyo nombre comienza por 'C'")
users.filter(user => {
    return user.name.startsWith("C")
}).forEach(user => {
    console.log(user.id + " - " + user.name);
});

console.log("\nUsuarios cuyo username comienza por 'K'")
users.filter(user => {
    return user.username.startsWith("K");
}).forEach(user => {
    console.log(user.id + " - " + "@" + user.username.toLowerCase());
});
