// todo file
import { TodoItem, deleteTodo, updateTodo } from '~/api/api';
import edit from '../assets/edit.svg';
import trash from '../assets/trash.svg';
import { useState } from 'react';

export default function Todo(props: any) {
  const { todo, setFetchAgain, fetchAgain, setNewTask, setTitle, setDescription, setEditTask, setId } = props;
  const [render, setRender] = useState(true);

  const updateStatus = (updatedTodo: any) => {
    updatedTodo.status = !updatedTodo.status;
    console.log('Updating Todo:', updatedTodo); // Debug statement
    updateTodo(updatedTodo)
      .then(response => {
        setRender(!render);
        console.log('Update Successful:', response); // Debug statement
      })
      .catch(error => {
        console.error('Failed to update todo status:', error);
        updatedTodo.status = !updatedTodo.status;
      });
  };

  const deleteTask = (id: string, event: any) => {
    event.stopPropagation(); // Prevent event propagation
    console.log('Delete Task:', id); // Debug statement
    deleteTodo(id)
      .then(response => {
        setFetchAgain(!fetchAgain);
        console.log('Update Successful:', response); // Debug statement
      })
      .catch(error => {
        console.error('Failed to update todo status:', error);
      });
  };

  const editTask = (todo: TodoItem) => {
    setId(todo.id);
    setTitle(todo.title);
    setDescription(todo.description);
    setNewTask(true);
    setEditTask(true);
  };

  return (
    <li
      className="relative flex items-center text-white bg-gray-700 mb-3 p-2 rounded-lg"
      key={todo.id}
      onClick={() => editTask(todo)}
    >
      <label htmlFor={`input-${todo.id}`} className="group cursor-pointer flex items-center">
        <input
          id={`input-${todo.id}`}
          className="appearance-none w-3.5 h-3.5 mr-2 border rounded-full ease-linear duration-400 group-hover:shadow-checkbox group-hover:border-secondary checked:border-secondary checked:bg-secondary"
          type="checkbox"
          checked={todo.status}
          onChange={() => updateStatus(todo)}
        />
        <span className={`mr-2 ${todo.status ? 'line-through text-light' : ''}`}>{todo.title}</span>
      </label>
      <div className="ml-auto flex space-x-2">
        <button
          className="text-white"
          onClick={event => {
            event.stopPropagation();
            editTask(todo);
          }}
        >
          <img src={edit} alt="edit" />
        </button>
        <button className="text-white" onClick={event => deleteTask(todo.id, event)}>
          <img src={trash} alt="delete" />
        </button>
      </div>
    </li>
  );
}
