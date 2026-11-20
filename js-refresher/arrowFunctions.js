// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};

// Short form: implicit return when there's a single expression
const add = (a, b) => a + b;

// One parameter: parentheses are optional
const double = (n) => n * 2;

// Returning an object needs parentheses
const makeUser = (name) => ({ name, active: true });
