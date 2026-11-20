// Spread: copy and extend arrays
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "cherry"]; // ["apple", "banana", "cherry"]

// Spread: copy and change objects
const user = { name: "Ana", age: 25 };
const olderUser = { ...user, age: 26 }; // { name: "Ana", age: 26 }

// Rest: collect "the remaining" values
const { name, ...rest } = user; // rest = { age: 25 }

const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
sum(1, 2, 3); // 6
