// const btn_login = document.getElementById("btn-login");
const personal_info_input = document.getElementById("pn-un");
const password_input = document.getElementById("password");
const user_personal_data = JSON.parse(localStorage.getItem("user_info"));
const user_name = user_personal_data["first_name"] + " " + user_personal_data["last_name"];
const phone_number_data = user_personal_data["phone_number"];
const password_data = user_personal_data["password"];

function onLogin() {
  if (localStorage.getItem("user_info") == null) {
    alert("Please check you and try again1");
    return false;
  }else if (personal_info_input.value == "" ||
    password_input.value == ""
    ) {
    return false;
  } else if (
    personal_info_input.value == user_name ||
    personal_info_input.value == phone_number_data
  ) {
    if (password_data == password_input.value) {
      localStorage.setItem("is_login", "1");
      return true;
    } else {
      alert("Please check you and try again2");
      return false;
    }
  } else {
    alert("Please check you and try again3");
      return false;
  }
}

function checkValidation() {
  // let x = document.getElementById("pn-un").value;
  // if (x != "hi") {
  //   return false;
  // }
  // onLogin();
    // (function () {
    //   "use strict";
    //   var forms = document.querySelectorAll(".needs-validation");
    //   Array.prototype.slice.call(forms).forEach(function (form) {
    //     form.addEventListener(
    //       "submit",
    //       function (event) {
    //         if (!form.checkValidity()) {
    //           event.preventDefault();
    //           event.stopPropagation();
              
    //         } else {
    //           // window.location.href = "https://stackoverflow.com/questions/4426184/how-to-go-from-one-page-to-another-page-using-javascript";
    //         //   onSubmit();
    //           // myFunction();
    //           console.log("Hello World how are you today");
    //           // window.location.reload(true);
    //           // window.location.href = '../pages/about.html';
    //           return false;
    //         }
    //         form.classList.add("was-validated");
    //       },
    //       // false
    //     );
    //   },);
    // })();
    
  }
  