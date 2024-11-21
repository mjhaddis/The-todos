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
            notDoneListItem.textContent = newTodo.text;
            notDoneListItem.id = newTodo.id;
            notDoneList.appendChild(notDoneListItem);

            textInput.value = "";

        } else {
            alert("Please enter some text!");
        }
        
    });
    
}

addTodo();

console.log(notDoneArrayList);
