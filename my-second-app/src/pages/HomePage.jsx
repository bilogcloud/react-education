import { useState } from "react";

const titlesFromBackend = ["Title"];

const students = [
  { id: 1, name: "Pero Peric", description: "Programer", salary: 1000 },
  { id: 2, name: "Ivo Ivic", description: "Designer", salary: 2000 },
  { id: 3, name: "Ana Anic", description: "Manager", salary: 3000 },
];

export function HomePage() {
  const [titles, setTitles] = useState(titlesFromBackend);

  return (
    <div>
      <nav>
        {titlesFromBackend.length > 0 && <p>Titles from backend</p>}

        {/* {titles.map((el) => (
          <div key={el}>
            <p>{el}</p>
            <input type="text" />
          </div>
        ))} */}

        {/* <div>
          <button onClick={() => setTitles(["New Title", ...titles])}>
            Add title
          </button>
        </div> */}

        {/* {students.map((element) => {
          const { id, name, description, salary } = element;

          return (
            <ProfileCard
              key={id}
              fullName={name}
              description={description}
              salary={salary}
            />
          );
        })} */}
      </nav>
    </div>
  );
}
