"use strict";
const inputTask = document.getElementById("input-task");
const addBtn = document.getElementById("btn-add");
//
//Hiển thị todolist
let todoTable = document.getElementById("todo-list");

function renderTodoList(dataArr) {
  todoTable.innerHTML = "";
  dataArr.forEach((data, i) => {
    if (data.owner === currentUser.userName) {
      // Hiển thị các Task
      let row = document.createElement("li");
      row.innerHTML = `${data.task}<span onclick="Delete('${i}')" class="close" >×</span>`;
      if (data.isDone) {
        row.classList.add("checked");
      }
      // Toggle Task
      row.addEventListener("click", () => {
        if (row.classList.contains("checked")) {
          //row.classList.remove("checked");
          data.isDone = false;
        } else {
          //row.classList.add("checked");
          data.isDone = true;
        }
        row.classList.toggle("checked");
        saveToStorage("todolist", todoArr);
      });
      todoTable.appendChild(row);
    }
  });
}
// Delete Task
function Delete(index) {
  todoArr.splice(index, 1);
  saveToStorage("todolist", todoArr);
  renderTodoList(todoArr);
}
//
if (currentUser) {
  renderTodoList(todoArr);
}
//
addBtn.addEventListener("click", function () {
  if (currentUser) {
    if (inputTask.value === "") {
      alert("Fill in the blank");
    } else {
      todoArr.push(new Task(inputTask.value, currentUser.userName, false));
      saveToStorage("todolist", todoArr);
      inputTask.value = "";
      renderTodoList(todoArr);
    }
  } else {
    alert("Please login!");
  }
});
//
