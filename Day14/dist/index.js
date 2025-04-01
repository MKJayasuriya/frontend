const todoList = [];
const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");
// Function to render the to-do list
function renderTodos() {
    list.innerHTML = ""; // Clear the list before re-rendering
    todoList.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed) {
            li.style.textDecoration = "line-through";
        }
        // Toggle complete status on click
        li.addEventListener("click", () => {
            todo.completed = !todo.completed;
            renderTodos();
        });
        // Delete button for each task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent triggering the complete event
            removeTodo(todo.id);
        });
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}
// Function to add a new to-do item
function addTodo() {
    if (!input.value.trim())
        return; // Prevent adding empty tasks
    const newTodo = {
        id: Date.now(),
        text: input.value.trim(),
        completed: false,
    };
    todoList.push(newTodo);
    input.value = ""; // Clear the input field
    renderTodos();
}
// Function to remove a to-do item
function removeTodo(id) {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todoList.splice(index, 1);
        renderTodos();
    }
}
// Ensure the add button is correctly linked
if (addButton) {
    addButton.addEventListener("click", addTodo);
}
else {
    console.error("Add button not found!");
}
export {};
