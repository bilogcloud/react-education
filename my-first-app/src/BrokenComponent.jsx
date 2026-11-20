import { useState } from "react";

function TaskList(props) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn JSX", done: true },
    { id: 2, text: "Learn props", done: true },
    { id: 3, text: "Learn state", done: false },
  ]);
  let showDone = true;

  function addTask() {
    tasks.push({ id: Date.now(), text: "New task", done: false });
    setTasks(tasks);
  }

  const doneCount = tasks.filter(task => task.done).length;

  return (
    <h2>{props.tittle}</h2>
    <div class="task-list">
      <button onClick={addTask()}>Add task</button>
      <button onClick={() => showDone = !showDone}>
        {showDone ? "Hide done" : "Show done"}
      </button>

      <ul>
        {tasks.map(task => (
          if (showDone || !task.done) {
            <li>{task.text}</li>
          }
        ))}
      </ul>

      {doneCount && <p>{doneCount} tasks completed</p>}
    </div>
  );
}

export default TaskList;