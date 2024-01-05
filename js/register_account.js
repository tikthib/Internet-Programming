var first_name = document.getElementById("validationCustom01");
var last_name = document.getElementById("validationCustom02");
var phone_number = document.getElementById("validationCustom03");
var password = document.getElementById("validationCustom04");
var confirm_password = document.getElementById("validationCustom05");

function onSubmit() {
  submitOK = "true";
  console.log(first_name.value);
  console.log(last_name.value);
  console.log(phone_number.value);
  console.log(password.value);
  console.log(confirm_password.value);

  localStorage.removeItem("user_info");
  localStorage.setItem(
    "user_info",
    JSON.stringify({
      first_name: first_name.value,
      last_name: last_name.value,
      phone_number: phone_number.value,
      password: password.value,
      email: "N/A",
      dob: "N/A",
      gender: "N/A",
    })
  );

  userData = JSON.parse(localStorage.getItem("user_info"));
  console.log(userData["first_name"]);
  console.log(userData["last_name"]);
  console.log(userData["phone_number"]);
  console.log(userData["password"]);
  localStorage.setItem("is_login", "1");
  window.location = "../index.html";
  window.location.href = "../index.html";
}

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
//           console.log("Hello World how are you today");
//         } else {
//           // window.location.replace = "https://stackoverflow.com/questions/4426184/how-to-go-from-one-page-to-another-page-using-javascript";
//           // onSubmit();
//           myFunction();
//         }
//         form.classList.add("was-validated");
//       },
//       false
//     );
//   },);
// })();

function checkValidation() {
  (function () {
    "use strict";
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener(
        "submit",
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            console.log("Hello World how are you today");
          } else {
            // window.location.href = "https://stackoverflow.com/questions/4426184/how-to-go-from-one-page-to-another-page-using-javascript";
            onSubmit();
            // myFunction();
            window.location.reload(true);
            // window.location.href = '../pages/about.html';
          }
          form.classList.add("was-validated");
        },
        false
      );
    },);
  })();
}
