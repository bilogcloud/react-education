// math.js
export const PI = 3.14; // named export
export function add(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  // default export (one per file)
  return a * b;
}

// app.js
