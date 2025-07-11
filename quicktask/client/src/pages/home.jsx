import { useState, useEffect } from 'react';
import TaskItem from '../components/Tasks';
import { getTasks, addTask, updateTask, deleteTask } from '../services/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error("Failed to load tasks:", err);
    }
  };

const handleAdd = async () => {
  if (!text.trim() || !content.trim()) return;

  try {
    const res = await addTask({ text, content, completed: false });
    setTasks((prev) => [res.data, ...prev]);  // Add to the top
    setText("");
    setContent("");
  } catch (err) {
    console.error("Failed to add task:", err);
  }
};

  const handleUpdate = async (id) => {
    const task = tasks.find((t) => t._id === id);
    if (!task) return;

    try {
      const res = await updateTask(id, { ...task, completed: !task.completed });
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-xl font-bold mb-4 text-gray-800">Quick Tasks from MongoDB</h1>

      <div className="flex flex-col gap-3 mb-6">
        <input
          value={text}
          placeholder="Task title..."
          onChange={(e) => setText(e.target.value)}
          className="p-2 text-sm border border-gray-300 rounded-lg bg-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          value={content}
          placeholder="Task content..."
          onChange={(e) => setContent(e.target.value)}
          rows="3"
          className="p-2 text-sm border border-gray-300 rounded-lg bg-white font-medium resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-200"
          title="Add new task"
        >
          ADD
        </button>
      </div>

      <div className="space-y-4">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet. Add one above.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onToggle={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;