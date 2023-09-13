"use strict";
const userNameInput = document.getElementById("input-username");
const passwordInput = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");
//console.log(`Userarr: ${userArr}`);
//
function clearInput() {
  userNameInput.value = "";
  passwordInput.value = "";
}
//
function validateData(userName, password) {
  if (userName === "" || password === "") {
    alert("Fill in the blank");
  } else {
    const user = userArr.find(
      (item) => item.userName === userName && item.password === password
    );

    // Nếu tìm thấy, đăng nhập thành công, lưu thông tin người dùng vào localStorage và chuyển trang về trang chủ.
    if (user) {
      saveToStorage("currentUser", user);
      clearInput();
      window.location.href = "../index.html";
    }
    //Nếu không tìm thấy username và password trùng với dữ liệu trong localstorage
    else {
      alert("Login failed! Please check your login credentials again.");
    }
  }
}
//

//
loginBtn.addEventListener("click", function (e) {
  const userName = userNameInput.value;
  const password = passwordInput.value;
  validateData(userName, password);
});
