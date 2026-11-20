// Objects
const user = { name: "Ana", age: 25, city: "Zagreb" };

const { name, age } = user;
console.log(name); // "Ana"

// Rename and set a default value
const { city: town, country = "Croatia" } = user;

// Arrays
const colors = ["red", "green", "blue"];
const [first, second] = colors;
console.log(first); // "red"
