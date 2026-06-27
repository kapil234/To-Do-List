
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
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center p-4 relative overflow-hidden">
    
    {/* Background Effects */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-20"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

    <div className="w-full max-w-3xl relative z-10">
      
      {/* Main Card */}
      <div className="bg-white/15 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
        
        <Header />

        <div className="p-8">

          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Task Manager
            </h2>

            <p className="text-gray-200">
              Organize your work and boost productivity
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 px-5 py-2 rounded-full text-white font-medium">
              Total Tasks: {tasks.length}
            </div>
          </div>

          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              placeholder="Enter a new task..."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="flex-1 px-5 py-3 rounded-xl bg-white text-gray-700 outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
            />

            <button
              onClick={addTask}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              Add Task
            </button>
          </div>

          {/* Empty State */}
          {tasks.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-7xl mb-4">📝</div>

              <h3 className="text-2xl font-bold text-white mb-2">
                No Tasks Yet
              </h3>

              <p className="text-gray-200">
                Add your first task to get started.
              </p>
            </div>
          ) : (
            <ToDoList
              tasks={tasks}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
              editTask={editTask}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);
}



export default App
