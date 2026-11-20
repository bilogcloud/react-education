const products = [
  { id: 1, name: "Laptop", price: 900, inStock: true },
  { id: 2, name: "Mouse", price: 25, inStock: false },
  { id: 3, name: "Keyboard", price: 60, inStock: true },
];

// map: transform each item into something new (same length)
const names = products.map((p) => p.name);
// ["Laptop", "Mouse", "Keyboard"]

// filter: keep only items that match a condition
const available = products.filter((p) => p.inStock);
// Laptop and Keyboard

// find: get the first match
const mouse = products.find((p) => p.id === 2);

// Chaining
const cheapNames = products.filter((p) => p.price < 100).map((p) => p.name);
// ["Mouse", "Keyboard"]
