import React from 'react';

const TaskItem = ({ task, editTask, deleteTask, toggleComplete }) => {
  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Unmark' : 'Complete'}
      </button>
    </div>
  );
};

export default TaskItem;
