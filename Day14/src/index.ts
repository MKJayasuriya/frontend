import { Todo } from "./todo";

// To-Do list array
const todoList: Todo[] = [];

// Get references to HTML elements
const input = document.getElementById("todo-input") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

// Function to render tasks
function renderTodos() {
    list.innerHTML = ""; // Clear existing list

    todoList.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.text;

        if (todo.completed) {
            li.style.textDecoration = "line-through";
        }

        li.addEventListener("click", () => {
            todo.completed = !todo.completed;
            renderTodos();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            removeTodo(todo.id);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

// Function to add a new task
function addTodo() {
    if (!input.value.trim()) return; // Ignore empty input

    const newTodo: Todo = {
        id: Date.now(),
        text: input.value.trim(),
        completed: false,
    };

    todoList.push(newTodo);
    input.value = ""; // Clear input
    renderTodos();
}

// Function to remove a task
function removeTodo(id: number) {
    const index = todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todoList.splice(index, 1);
        renderTodos();
    }
}

// Ensure event listener is added
if (addButton) {
    addButton.addEventListener("click", addTodo);
} else {
    console.error("Add button not found!");
}
