"use strict";
const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const submitBtn = document.getElementById("btn-submit");
//
if (currentUser) {
  inputPageSize.value = currentUser.pageSize;
  inputCategory.value = currentUser.category;
}

//
submitBtn.addEventListener("click", function () {
  if (currentUser) {
    if (inputPageSize.value === "" || inputCategory.value === "") {
      alert("Fill in the blank.");
    } else if (inputPageSize.value < 1) {
      alert("Invalid pagesize.");
    } else {
      userArr.forEach((user) => {
        if (user.userName === currentUser.userName) {
          user.pageSize = Number(inputPageSize.value);
          user.category = inputCategory.value;
          currentUser = user;
          saveToStorage("dataUser", userArr);
          saveToStorage("currentUser", user);
        }
      });
      alert("Installation successful!");
    }
  } else {
    alert("Please login!");
  }
});
