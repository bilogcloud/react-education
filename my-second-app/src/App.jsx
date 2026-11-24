import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import "./App.css";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { TaskDetailsPage } from "./pages/TaskDetailsPage";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", done: false },
    { id: 2, text: "Task 2", done: false },
    { id: 3, text: "Task 3", done: true },
  ]);

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>

      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
