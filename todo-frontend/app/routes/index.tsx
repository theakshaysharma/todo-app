import { useEffect, useState } from 'react';
import { TodoItem, addTodo, fetchTodos, updateTodo } from '~/api/api';
import Todo from '~/components/Todo';
import leftArrow from '../assets/leftarrow.svg';
import rightArrow from '../assets/rightarrow.svg';
import AddTask from '~/components/AddTask';

export default function Index() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fetchAgain, setFetchAgain] = useState(false);
  const [newTask, setNewTask] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    fetchTodos()
      .then(fetchedTodos => {
        setTodos(fetchedTodos);
        if (fetchedTodos.length === 0) {
          setNewTask(true);
        }
      })
      .catch(console.error);
  }, [fetchAgain]);

  function handleSubmit(e: any) {
    e.preventDefault();
    const createTodo = {
      title,
      description,
    };
    addTodo(createTodo)
      .then(response => {
        setFetchAgain(!fetchAgain);
        console.log('Update Successful:', response);
      })
      .catch(error => {
        console.error('Failed to update todo status:', error);
      });
    setNewTask(false);
    clearForm();
  }

  const updateTask = () => {
    const updatedTodo = {
      id,
      title,
      description,
    };
    console.log('Updating Todo:', updatedTodo); // Debug statement
    updateTodo(updatedTodo)
      .then(response => {
        setFetchAgain(!fetchAgain);
        console.log('Update Successful:', response); // Debug statement
      })
      .catch(error => {
        console.error('Failed to update todo status:', error);
      });
    setEditTask(false);
    setNewTask(false);
    clearForm();
  };

  function clearForm() {
    setTitle('');
    setDescription('');
  }

  const todosPerPage = 5;
  const startIndex = (page - 1) * todosPerPage;
  const currentTodos = todos.slice(startIndex, startIndex + todosPerPage);
  const totalPages = Math.ceil(todos.length / todosPerPage);

  return (
    <main className="app-container bg-gradient-to-r from-green-400 to-blue-500 flex h-screen justify-end relative">
      <div className="grid grid-cols-1 gap-1 m-auto bg-gray-800 rounded-lg shadow-lg p-6 w-1/3 text-white relative">
        <div className="grid grid-cols-2 gap-1">
          <h2 className="text-2xl font-semibold mb-4 col-span-1">TODO LIST</h2>
          {newTask ? (
            <></>
          ) : (
            <button
              className="bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md mb-4 col-span-1 transition duration-300 hover:bg-gray-900 hover:text-white"
              onClick={() => setNewTask(true)}
            >
              Add New Task
            </button>
          )}
        </div>
        <hr className="col-span-1 border-gray-600 mb-4" />
        <ul className="todos col-span-1 space-y-3">
          {newTask ? (
            <AddTask title={title} description={description} setTitle={setTitle} setDescription={setDescription} />
          ) : (
            <>
              {currentTodos.map(todo => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  fetchAgain={fetchAgain}
                  setFetchAgain={setFetchAgain}
                  setNewTask={setNewTask}
                  setTitle={setTitle}
                  setDescription={setDescription}
                  setEditTask={setEditTask}
                  setId={setId}
                />
              ))}
            </>
          )}
        </ul>
        {newTask ? (
          <>
            <div className="flex">
              <button
                className="bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white mt-4"
                onClick={() => setNewTask(false)}
              >
                Cancel
              </button>

              {editTask ? (
                <button
                  className="bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white mt-4 right-4 absolute"
                  onClick={updateTask}
                >
                  Update
                </button>
              ) : (
                <button
                  className="bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white mt-4 right-4 absolute"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            {totalPages > 1 ? (
              <>
                <hr className="col-span-1 border-gray-600 mt-4" />
                <div className="flex justify-center mt-4 items-center">
                  <span className="text-center">
                    Page {page} of {totalPages}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-4">
                  <button
                    className="bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white"
                    onClick={() => setPage(page - 1)}
                    disabled={page <= 1}
                  >
                    <img src={leftArrow} alt="previous" />
                  </button>
                  <button
                    className="bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-md transition duration-300 hover:bg-gray-900 hover:text-white"
                    onClick={() => setPage(page + 1)}
                    disabled={page >= totalPages}
                  >
                    <img src={rightArrow} alt="next" />
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </main>
  );
}
