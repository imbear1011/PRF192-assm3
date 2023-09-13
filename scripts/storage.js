"use strict";
//Ham lay du lieu
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// Ham luu du lieu
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
//Lay du lieu userArr tu LocalStorage
const userArr = getFromStorage("dataUser") ?? [];

// Lay du lieu user dang nhap
let currentUser = getFromStorage("currentUser");

// lay du lieu todo
const todoArr = getFromStorage("todolist") ?? [];

//
