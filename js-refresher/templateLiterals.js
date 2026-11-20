const name = "Ana";
const items = 3;

// Old way
const msg = "Hi " + name + ", you have " + items + " items.";

// Template literal
const msg = `Hi ${name}, you have ${items} items.`;

// Expressions work inside ${}
const label = `Total: ${items * 10} EUR`;
