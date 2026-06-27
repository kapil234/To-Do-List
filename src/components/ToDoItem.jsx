import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleSave = () => {
    editTask(task.id, updatedText);
    setIsEditing(false);
  };

  return (
    <div
      className={`flex justify-between items-center p-3 rounded-lg shadow mb-3 ${
        task.completed ? "bg-green-100" : "bg-white"
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="border px-2 py-1 rounded w-full mr-2"
        />
      ) : (
        <span
          className={`flex-1 ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="bg-green-500 text-white px-3 py-1 rounded"
        >
          ✓
        </button>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;