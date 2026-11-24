import { useState } from "react";

export function TaskForm({ setTasks }) {
  const [taskTitle, setTaskTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), text: taskTitle, done: false },
    ]);
    setTaskTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <button type="submit">Add task</button>
    </form>
  );
}
