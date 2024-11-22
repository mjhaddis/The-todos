import './style.css'

import { Todo } from './models/models';


let todoArrayList = [
    new Todo(1, "Finish assignment")
];

const notDoneList = document.getElementById("notDone");
const doneList = document.getElementById("done");

const sortOldestBtn = document.getElementById("sortOldBtn");
const sortNewestBtn = document.getElementById("sortNewBtn");

sortOldestBtn.addEventListener("click", () => {
    sortTodos("oldest");
})

sortNewestBtn.addEventListener("click", () => {
    sortTodos("newest");
})

// Funktion för att sortera todo-listan
function sortTodos(order) {
    todoArrayList.sort((a,b) => {
        return order === "newest" ? b.id - a.id : a.id - b.id; // Sorterar beroende på vald ordning
    });

    renderLists();
}

function renderLists() {
    notDoneList.innerHTML = "";
    doneList.innerHTML = "";

// Loopa igenom alla todos och skapa HTML-element för dem
    todoArrayList.forEach(todo => {
        const listItem = createTodoElement(todo); 
        if (todo.done) {
            doneList.appendChild(listItem);
        } else {
            notDoneList.appendChild(listItem);
        }
    });
}

// Funktion för att lägga till en ny todo
function addTodo() {

    const addBtn = document.getElementById("inputBtn");
    const textInput = document.getElementById("todoInput");

    addBtn.addEventListener("click", () => {

        const todoText = textInput.value.trim();

        if (todoText) {

            const newTodo = new Todo(Date.now(), todoText);
            todoArrayList.push(newTodo);

            renderLists();

            textInput.value = "";

        } else {
            alert("Please enter something to do!");
        }
        
    });
    
}

// Skapa HTML-element för en todo

function createTodoElement(todo) {
    const listItem = document.createElement("li");
    listItem.id = todo.id;

    const doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    doneCheckbox.checked = todo.done;

    doneCheckbox.addEventListener("change", () => {
        todo.done = doneCheckbox.checked;
        renderLists();
    });

    const todoTextNode = document.createTextNode(todo.text);

    const deleteTodo = document.createElement("span");
    deleteTodo.innerHTML = "x";
    
    deleteTodo.addEventListener("click", () => {

        todoArrayList = todoArrayList.filter(t => t.id !== todo.id);

        //Ta bort från DOM
        listItem.remove();

        renderLists();
    })
    
      // Lägg till checkbox, text och delete-knapp till listitem
    listItem.appendChild(doneCheckbox);
    listItem.appendChild(todoTextNode);
    listItem.appendChild(deleteTodo)

    return listItem;
}

addTodo();

renderLists();

console.log(todoArrayList);
