import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleSave = () => {
    if (!updatedText.trim()) return;

    editTask(task.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-xl shadow-md mb-4 transition-all duration-300 hover:shadow-lg ${
        task.completed
          ? "bg-green-50 border-l-4 border-green-500"
          : "bg-white"
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="flex-1 border-2 border-blue-300 px-3 py-2 rounded-lg mr-3 focus:outline-none focus:border-blue-500"
        />
      ) : (
        <div className="flex-1">
          <p
            className={`font-medium text-lg ${
              task.completed
                ? "line-through text-gray-500"
                : "text-gray-800"
            }`}
          >
            {task.text}
          </p>

          {task.completed && (
            <span className="text-green-600 text-sm font-semibold">
              ✓ Completed
            </span>
          )}
        </div>
      )}

      <div className="flex gap-2 ml-3">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`px-3 py-2 rounded-lg text-white font-medium transition ${
            task.completed
              ? "bg-green-700"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {task.completed ? "Done" : "✓"}
        </button>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-lg transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}



export default ToDoItem;