const name = "Ana"; // can't be reassigned
let age = 25; // can be reassigned
age = 26; // OK
// name = "Ivan";        // Error

const user = { name: "Ana" };
user.name = "Ivan"; // OK: the object can still change, only the variable is fixed
