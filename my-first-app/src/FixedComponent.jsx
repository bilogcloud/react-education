import { useState } from "react";

function TaskList({ title }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn JSX", done: true },
    { id: 2, text: "Learn props", done: true },
    { id: 3, text: "Learn state", done: false },
  ]);
  const [showDone, setShowDone] = useState(true);

  function addTask() {
    setTasks([...tasks, { id: Date.now(), text: "New task", done: false }]);
  }

  const doneCount = tasks.filter((task) => task.done).length;
  const visibleTasks = tasks.filter((task) => showDone || !task.done);

  return (
    <div className="task-list">
      <h2>{title}</h2>
      <button onClick={addTask}>Add task</button>
      <button onClick={() => setShowDone(!showDone)}>
        {showDone ? "Hide done" : "Show done"}
      </button>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
      {doneCount > 0 && <p>{doneCount} tasks completed</p>}
    </div>
  );
}

export default TaskList;
