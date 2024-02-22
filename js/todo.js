const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const clear = document.querySelector("#clear-button");

let toDos = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.style.marginBottom = "10px";
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.style.background = "transparent";
  button.style.padding = "0";
  button.style.width = "15px";
  button.style.height = "15px";
  button.style.minWidth = "5px";
  button.style.minHeight = "5px";
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
  btnGreeting();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedTodo = localStorage.getItem("todos");

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  toDos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}

/* 지우개 */
function btnGreeting() {
  const savedTodoLength = toDos.length;
  if (savedTodoLength >= 1) {
    clear.classList.remove("hidden");
  }
}
function onClear() {
  localStorage.removeItem("todos");
  window.location.reload();
}
btnGreeting();
clear.addEventListener("click", onClear);
