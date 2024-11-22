import './style.css'

import { Todo } from './models/models';

let todoArrayList = []

const notDoneList = document.getElementById("notDone");
const doneList = document.getElementById("done");

function addTodo() {

    const addBtn = document.getElementById("inputBtn");
    const textInput = document.getElementById("todoInput");

    addBtn.addEventListener("click", () => {

        const todoText = textInput.value.trim();

        if (todoText) {

            const newTodo = new Todo(Date.now(), todoText);
            todoArrayList.push(newTodo);

            const listItem = createTodoElement(newTodo);
            notDoneList.appendChild(listItem);

            textInput.value = "";

        } else {
            alert("Please enter something to do!");
        }
        
    });
    
}

function createTodoElement(todo) {
    const listItem = document.createElement("li");
    listItem.id = todo.id;

    const doneCheckbox = document.createElement("input");
    doneCheckbox.setAttribute("type", "checkbox");
    doneCheckbox.checked = todo.done;

    doneCheckbox.addEventListener("change", () => {
        todo.done = doneCheckbox.checked;
        moveTodoElement(listItem, todo.done);
    })

    const todoTextNode = document.createTextNode(todo.text);

    const deleteTodo = document.createElement("span");
    deleteTodo.innerHTML = "x";
    
    deleteTodo.addEventListener("click", () => {
        //Ta bort från DOM
        listItem.remove();
        todoArrayList = todoArrayList.filter(t => t.id !== todo.id);
    })
    
    listItem.appendChild(doneCheckbox);
    listItem.appendChild(todoTextNode);
    listItem.appendChild(deleteTodo)

    return listItem;
}

function moveTodoElement(element, isDone) {
    if(isDone) {
        doneList.appendChild(element);
    } else {
        notDoneList.appendChild(element);
    }
}

addTodo();

console.log(todoArrayList);
