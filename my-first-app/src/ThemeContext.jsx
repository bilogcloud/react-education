import { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext("light");

// 2. Provide a value high in the tree
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext value={theme}>
      <Layout />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </ThemeContext>
  );
}

// 3. Read it anywhere below, without passing props through every level
function TaskItem({ task }) {
  const theme = useContext(ThemeContext);
  return <li className={theme}>{task.text}</li>;
}
