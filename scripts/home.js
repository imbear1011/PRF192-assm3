"use strict";
const loginModal = document.getElementById("login-modal");
const message = document.getElementById("welcome-message");
const logoutBtn = document.getElementById("btn-logout");

if (currentUser) {
  loginModal.innerHTML = ``;
  message.innerHTML = `Welcome ${currentUser.firstName}`;
}
//
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "./pages/login.html";
});
