"use strict";
const firstNameInput = document.getElementById("input-firstname");
const lastNameInput = document.getElementById("input-lastname");
const userNameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const passwordConfirmInput = document.getElementById("input-password-confirm");
const registerBtn = document.getElementById("btn-submit");
//Kiểm tra dữ liệu hợp lệ
function validateData(
  firstName,
  lastName,
  userName,
  password,
  passwordConfirm
) {
  for (let i = 0; i < userArr.length; i++) {
    if (userName === userArr[i].userName) {
      alert("Username is not available!");
      userNameInput.value = "";
      return;
    }
  }

  if (
    firstName === "" ||
    lastName === "" ||
    userName === "" ||
    password === "" ||
    passwordConfirm === ""
  ) {
    alert("Fill in the blank");
  } else if (password.length <= 8) {
    alert("The password must consist of at least 9 characters.");
  } else if (password !== passwordConfirm) {
    alert("Confirm password not correct!");
  } else {
    userArr.push(
      new User(firstName, lastName, userName, password, 10, "General") // Mặc định giá trị cho pageSize = 10, category = 'General'
    );
    saveToStorage("dataUser", userArr);
    window.location.href = "../pages/login.html";
  }
}
//
function clearInput() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  userNameInput.value = "";
  passwordInput.value = "";
  passwordConfirmInput.value = "";
}
//
registerBtn.addEventListener("click", function (e) {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const userName = userNameInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  validateData(firstName, lastName, userName, password, passwordConfirm);
  clearInput();
});
