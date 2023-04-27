// Initialize an empty array to hold the tasks
let tasks = [];

// Get references to the form and list elements
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');

// Add an event listener to the form to handle form submissions
todoForm.addEventListener('submit', (event) => {
event.preventDefault(); // Prevent the form from submitting normally

// Get the value from the task input
const task = document.querySelector('#task-input').value;

// Add the new task to the tasks array
tasks.push({ task, completed: false });

// Clear the task input
document.querySelector('#task-input').value = '';

// Render the updated task list
renderTasks();
});

// Add an event listener to the list to handle checkbox clicks
todoList.addEventListener('change', (event) => {
if (event.target.classList.contains('task-checkbox')) {
    const index = parseInt(event.target.dataset.index);
    tasks[index].completed = event.target.checked; // Update the completed status of the task
    renderTasks(); // Render the updated task list
}
});

// Add an event listener to the list to handle delete button clicks
todoList.addEventListener('click', (event) => {
if (event.target.classList.contains('delete-button')) {
    const index = parseInt(event.target.dataset.index);
    tasks.splice(index, 1); // Remove the task from the array
    renderTasks(); // Render the updated task list
}
});

// Render the list of tasks
function renderTasks() {
// Clear the task list
todoList.innerHTML = '';

// Render each task as a list item
tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const deleteButton = document.createElement('button');

    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.classList.add('task-checkbox');
    checkbox.dataset.index = index;

    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.dataset.index = index;

    li.textContent = task.task;
    li.classList.add("text-center")
    li.classList.add("m-2")
    li.appendChild(checkbox);
    li.appendChild(deleteButton);

    if (task.completed) {
    li.classList.add('completed');
    }

    todoList.appendChild(li);
});
}