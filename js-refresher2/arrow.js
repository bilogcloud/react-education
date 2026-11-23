function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

{
  (a, b, c, d);
}

function Component({ a, b, ...rest }) {
  a;

  rest.c;
}

const amount = 10;
const currency = "USD";

amount + " " + currency`${amount} - ${currency} - ${amount + 10}```;

export function Component1() {}

const array = [1, 2, 3, 4, 5];
const newArray = array.map((item) => item * 2);
console.log(newArray); // [2, 4, 6, 8, 10]

const filteredArray = array.filter((item) => item > 2);
console.log(filteredArray); // [3, 4, 5]
