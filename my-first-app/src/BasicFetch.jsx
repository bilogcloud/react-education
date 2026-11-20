import { useEffect, useState } from "react";

export function BasicFetch() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setUsers(data);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
