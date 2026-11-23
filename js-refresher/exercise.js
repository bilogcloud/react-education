const students = [
  { id: 1, name: "Ana", grade: 5, city: "Zagreb" },
  { id: 2, name: "Ivan", grade: 3, city: "Split" },
  { id: 3, name: "Maja", grade: 4, city: "Zagreb" },
];

// 1. Get an array of all student names
const studentNames = students.map((student) => student.name);

// 2. Get only the students from Zagreb
const zagrebStudents = students.filter((student) => student.city === "Zagreb");

// 3. Add a new student without changing the original array
const newStudent = { id: 4, name: "Petar", grade: 4, city: "Zagreb" };
const updatedStudents = [...students, newStudent];

// 4. Change Ivan's grade to 4 without mutating anything
const students2 = students.map((student) =>
  student.name === "Ivan" ? { ...student, grade: 4 } : student,
);

// 5. Use destructuring to get name and city of the first student
const { name, city, grade } = students[0];

// 6. Build the string "Ana (Zagreb) – grade 5" with a template literal
const studentString = `${name} (${city}) – grade ${grade}`;
