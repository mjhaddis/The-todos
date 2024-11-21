import './style.css'

import { Todo } from './models/models';

let notDoneArrayList = []

let doneArrayList = []


function addTodo() {

    const addBtn = document.getElementById("inputBtn");
    const textInput = document.getElementById("todoInput");
    const notDoneList = document.getElementById("notDone");

    addBtn.addEventListener("click", () => {

        const todoText = textInput.value.trim();

        if (todoText) {

            const newTodo = new Todo(Date.now(), todoText);
            notDoneArrayList.push(newTodo);

            const notDoneListItem = document.createElement("li");
            notDoneListItem.id = newTodo.id;

            const doneCheckbox = document.createElement("input");
            doneCheckbox.setAttribute("type", "checkbox");

            const todoTextNode = document.createTextNode(newTodo.text);

            const deleteTodo = document.createElement("span");
            deleteTodo.innerHTML = "x";
            
            deleteTodo.addEventListener("click", () => {
                //Ta bort från DOM
                notDoneListItem.remove();
            })
            
            notDoneListItem.appendChild(doneCheckbox);
            notDoneListItem.appendChild(todoTextNode);
            notDoneListItem.appendChild(deleteTodo)

            notDoneList.appendChild(notDoneListItem);

            textInput.value = "";

        } else {
            alert("Please enter something to do!");
        }
        
    });
    
}

function doneTodo() {


}

addTodo();

console.log(notDoneArrayList);
