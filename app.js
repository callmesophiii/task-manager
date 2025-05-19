let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskNameInput = document.getElementById("taskName");
const categoryInput = document.getElementById("category");
const deadlineInput = document.getElementById("deadline");
const statusInput = document.getElementById("status");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTask");
const clearAllButton = document.getElementById("clearAll");
const filterStatus = document.getElementById("filterStatus");
const filterCategory = document.getElementById("filterCategory");

// Save to Local Storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Check if task is overdue
function updateOverdueTasks() {
  const today = new Date().toISOString().split("T")[0];
  tasks.forEach(task => {
    if (task.status !== "Completed" && task.deadline < today) {
      task.status = "Overdue";
    }
  });
}

// Display Tasks
function renderTasks() {
  updateOverdueTasks();
  taskList.innerHTML = "";

  const statusFilter = filterStatus.value;
  const categoryFilter = filterCategory.value.toLowerCase();

  tasks.forEach((task, index) => {
    if ((statusFilter && task.status !== statusFilter) ||
        (categoryFilter && !task.category.toLowerCase().includes(categoryFilter))) {
      return; // Skip tasks that don't match the filter
    }

    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    if (task.status === "Overdue") taskDiv.classList.add("overdue");

    taskDiv.innerHTML = `
      <strong>${task.name}</strong> [${task.category}]<br>
      Deadline: ${task.deadline} <br>
      Status: 
      <select data-index="${index}">
        <option${task.status === "In Progress" ? " selected" : ""}>In Progress</option>
        <option${task.status === "Completed" ? " selected" : ""}>Completed</option>
        <option${task.status === "Overdue" ? " selected" : ""}>Overdue</option>
      </select>
    `;

    taskList.appendChild(taskDiv);
  });

  saveTasks(); // Keep localStorage updated
}

// Add Task
addTaskButton.addEventListener("click", () => {
  const name = taskNameInput.value.trim();
  const category = categoryInput.value.trim();
  const deadline = deadlineInput.value;
  const status = statusInput.value;

  if (!name || !category || !deadline) {
    alert("Please fill all fields.");
    return;
  }

  tasks.push({ name, category, deadline, status });
  renderTasks();

  taskNameInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
  statusInput.value = "In Progress";
});

// Delete Task
clearAllButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    localStorage.removeItem("tasks");
    renderTasks();
  }
});

// Update Status
taskList.addEventListener("change", (e) => {
  if (e.target.tagName === "SELECT") {
    const index = e.target.getAttribute("data-index");
    tasks[index].status = e.target.value;
    renderTasks();
  }
});

// Filter Events
filterStatus.addEventListener("change", renderTasks);
filterCategory.addEventListener("input", renderTasks);

// Initial Render
renderTasks();
