import { useState } from "react";

export function MissingKeyComponent() {
  const [people, setPeople] = useState([
    { id: 1, name: "Ana" },
    { id: 2, name: "Ivan" },
  ]);

  function addToTop() {
    setPeople([{ id: Date.now(), name: "Maja" }, ...people]);
  }

  return (
    <div>
      <button onClick={addToTop}>Add Maja to top</button>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.name}: <input placeholder="Write a note" />
          </li>
        ))}
      </ul>
    </div>
  );
}
