
import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const editTask = (id, updatedText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: updatedText }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl">
        <Header />

        <div className="p-5">
          <div className="flex gap-2 mb-5">
            <input
              type="text"
              placeholder="Enter a task..."
              value={taskInput}
              onChange={(e) =>
                setTaskInput(e.target.value)
              }
              className="flex-1 border px-4 py-2 rounded-lg"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Add
            </button>
          </div>

          <ToDoList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
}



export default App
