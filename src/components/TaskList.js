import React from "react";
import Task from "./Task";


function TaskList({ tasks, filter, setNewTasks }) {
  function handleRemoveTask(taskText) {
    setNewTasks(tasks.filter((task) => task.text !== taskText));
  }

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All" || filter === "") {
      return true;
    }
    return task.category === filter;
  });

  const taskList = filteredTasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      handleRemoveTask={() => handleRemoveTask(task.text)}
    />
  ));

  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
