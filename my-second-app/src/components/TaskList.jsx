import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ThemeContext } from "../providers/ThemeContext";

export function TaskList({ title, tasks }) {
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);

  console.log("THEME", theme);

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
            <li key={task.id} onClick={() => navigate(`/tasks/${task.id}`)}>
              {task.text}
            </li>
          ))}
        </ul>

        {doneCount >= 0 && <p>{doneCount} tasks completed</p>}
      </div>
    </>
  );
}
