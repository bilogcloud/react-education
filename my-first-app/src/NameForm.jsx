import { useState } from "react";

export function NameForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading
    alert(`Hello, ${name}!`);
    setName(""); // clear the field
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <button type="submit">Send</button>
      <p>Preview: {name}</p>
    </form>
  );
}
