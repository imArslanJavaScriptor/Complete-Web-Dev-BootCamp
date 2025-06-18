document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => renderTask(task));

  addTaskBtn.addEventListener("click", function () {
    let taskText = todoInput.value.trim();
    if (taskText === "") return;

    let newTask = {
      id: Date.now(),
      task: taskText,
      isCompleted: false,
    };

    tasks.push(newTask);
    saveTask();
    renderTask(newTask);
    todoInput.value = "";
  });

  function renderTask(task) {
    const li = document.createElement("li");

    li.setAttribute("data-id", task.id);
    if (task.isCompleted) li.classList.add("completed");
    li.innerHTML = `
      <span>${task.task}</span>
      <button class="delete">Delete</button>
    `;

    li.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return;
      task.isCompleted = !task.isCompleted;
      li.classList.toggle("completed");
      saveTask();
    });

    li.querySelector(".delete").addEventListener("click", function (e) {
      e.stopPropagation();
      const taskId = task.id;
      tasks = tasks.filter((task) => task.id !== taskId);
      li.remove();
      saveTask();
    });

    todoList.appendChild(li);
  }

  function saveTask() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
