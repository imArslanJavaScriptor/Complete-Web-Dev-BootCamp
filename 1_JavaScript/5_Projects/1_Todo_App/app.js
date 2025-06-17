const todoInput = document.getElementById("todo-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");
const deleteBtn = document.getElementById("delete");

let tasks = [];

addTaskBtn.addEventListener("click", function () {
  const taskInput = todoInput.value.trim();
  console.log(taskInput);

  if (taskInput === "") return;

  const newTask = {
    id: Date.now(),
    title: taskInput,
    isCompleted: false,
  };

  tasks.push(newTask);
  console.log(tasks);

  const divEl = document.createElement("div");
  divEl.setAttribute("class", "Dflex")
  divEl.innerHTML = `<li>${newTask.title}
  <button class="delete">Delete</button>
  </li>`;

});
