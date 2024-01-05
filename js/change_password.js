const user_personal_data = JSON.parse(localStorage.getItem("user_info"));
const user_name_data = user_personal_data["first_name"] + " " + user_personal_data["last_name"];
const first_name_data = user_personal_data["first_name"];
const last_name_data = user_personal_data["last_name"]
const phone_number_data = user_personal_data["phone_number"];
const password_data = user_personal_data["password"];
const email_data = user_personal_data["email"];
const dob_data = user_personal_data["dob"];
const gender_data = user_personal_data["gender"];

const user_name = document.getElementById("text_name");
const phone_number = document.getElementById("phone_number_text");
const email = document.getElementById("email_text");
const first_name = document.getElementById("first_name_text");
const last_name = document.getElementById("last_name_text");
const dob = document.getElementById("dob_text");
const gender = document.getElementById("gender_text");

const phone_number_input = document.getElementById("phone_number_input");
const email_input = document.getElementById("email_input");
const first_name_input = document.getElementById("first_name_input");
const last_name_input = document.getElementById("last_name_input");
const dob_input = document.getElementById("dob_input");
const gender_input = document.getElementById("gender_input");

user_name.textContent = user_name_data;
phone_number.textContent = phone_number_data;
email.textContent = email_data;
first_name.textContent = first_name_data;
last_name.textContent = last_name_data;
dob.textContent = dob_data;
gender.textContent = gender_data;

// phone_number_input.value = phone_number_data;
// phone_number_input.setAttribute('value',phone_number_data);
// email_input.setAttribute('value',email_data);
// first_name_input.setAttribute('value',first_name_data);
// last_name_input.setAttribute('value',last_name_data);
// dob_input.value = dob_data;




