import { useState } from "react";
export function NameForm() {
  const [names, setNames] = useState([]);
  //   const [name, setName] = useState("");
  //   const [surname, setSurname] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");

  const [data, setData] = useState({
    name: "",
    surname: "",
    phoneNumber: "",
  });

  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.length < 3) {
      setError("Name must be at least 3 characters long");
      return;
    }
    if (data.surname.length < 3) {
      setError("Name must be at least 3 characters long");
      return;
    }
    setError(null);
    setNames([...names, data.name]);
    setData({
      name: "",
      surname: "",
      phoneNumber: "",
    });
  };

  const handleChange = (e) => {
    // const someObject = { name: "Luka", age: 30, city: "New York" };
    // console.log("My name", someObject["name"]);

    setData({
      ...data,
      [e.target.name]: e.target.value,
      //   ["phoneNumber"]: "+1 (555) 123-4567",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={data.name}
          placeholder="Name"
          //   onChange={(event) => setName(event.target.value)}
          onChange={handleChange}
        />
        <input
          name="surname"
          value={data.surname}
          placeholder="Surname"
          //   onChange={(event) => setSurname(event.target.value)}
          onChange={handleChange}
        />
        <input
          name="phoneNumber"
          value={data.phoneNumber}
          placeholder="Phone Number"
          //   onChange={(event) => setPhoneNumber(event.target.value)}
          onChange={handleChange}
        />
        <button type="submit" disabled={data.name.length === 0}>
          Add name
        </button>
      </form>
      <p>{data.name}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}
