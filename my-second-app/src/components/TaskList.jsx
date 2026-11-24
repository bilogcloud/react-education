import { useState } from "react";

export function TaskList({ title, tasks }) {
  const [showDone, setShowDone] = useState(true);

  const doneCount = tasks.filter((task) => task.done).length;
  const visibleTasks = tasks.filter((task) => showDone || !task.done);

  return (
    <>
      <h2>{title}</h2>
      <div className="task-list">
        <button onClick={() => setShowDone(!showDone)}>
          {showDone ? "Hide done" : "Show done"}
        </button>

        <ul>
          {visibleTasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>

        {doneCount >= 0 && <p>{doneCount} tasks completed</p>}
      </div>
    </>
  );
}
