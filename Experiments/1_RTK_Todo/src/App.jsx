import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./features/todos/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const filtered = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input.trim()));
      setInput("");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Redux Toolkit Todo</h1>

      <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo..."
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
      </form>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <button
          onClick={() => setFilter("all")}
          style={{ margin: "0 5px", padding: "8px 16px" }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          style={{ margin: "0 5px", padding: "8px 16px" }}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          style={{ margin: "0 5px", padding: "8px 16px" }}
        >
          Completed
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              background: "#f9f9f9",
              marginBottom: "8px",
              borderRadius: "4px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{
                color: "red",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
