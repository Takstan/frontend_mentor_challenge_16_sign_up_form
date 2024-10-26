"use strict";

// Form
const regForm = document.getElementById("registrationForm");

// Inputs
const inputFirstName = document.querySelector(".register__input--user");
const inputLastName = document.querySelector(".register__input--surname");
const inputEmail = document.querySelector(".register__input--mail");
const inputPassword = document.querySelector(".register__input--pin");
const errorMsg = document.querySelector(".input--text");
const errorFirst = document.querySelector(".error--first");
const errorLast = document.querySelector(".error--last");
const errorEmail = document.querySelector(".error--email");
const errorPassword = document.querySelector(".error--password");

const regex = /^[A-Za-z]+$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

const setError = function (element, errorEl, message) {
  errorEl.textContent = message;
  errorEl.style.display = "block";
  element.classList.add("input--error");
  element.style.outline = "none";
};

const clearError = function (element, errorEl) {
  errorEl.style.display = "none";
  element.classList.remove("input--error");
  element.style.outline = "";
};

const validate = function (element, errorEl, regex, errorMessage) {
  const inputValue = element.value.trim();

  if (inputValue.length === 0) {
    clearError(element, errorEl);
  } else if (!regex.test(inputValue)) {
    setError(element, errorEl, errorMessage);
  } else if (inputValue.length < 2) {
    setError(element, errorEl, errorMessage);
  } else {
    clearError(element, errorEl);
  }

  return inputValue;
};

// Event Listener
inputFirstName.addEventListener("input", function () {
  validate(inputFirstName, errorFirst, regex, "Please enter only letters.");
});

inputLastName.addEventListener("input", function () {
  validate(inputLastName, errorLast, regex, "Please enter only letters.");
});

inputEmail.addEventListener("input", function () {
  validate(
    inputEmail,
    errorEmail,
    emailRegex,
    "Please enter a valid Gmail or Yahoo email address."
  );
});

inputPassword.addEventListener("input", function () {
  validate(
    inputPassword,
    errorPassword,
    passwordRegex,
    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
  );
});

regForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const firstName = validate(
    inputFirstName,
    errorFirst,
    regex,
    "Please enter only letters."
  );
  if (!firstName) isValid = false;
  const lastName = validate(
    inputLastName,
    errorLast,
    regex,
    "Please enter only letters."
  );
  if (!lastName) isValid = false;
  const email = validate(
    inputEmail,
    errorEmail,
    emailRegex,
    "Please enter a valid Gmail or Yahoo email address."
  );
  if (!email) isValid = false;
  const password = validate(
    inputPassword,
    errorPassword,
    passwordRegex,
    "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
  );
  if (!password) isValid = false;

  if (firstName && lastName && email && password) {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    alert("success");
  } else {
    alert("error");
  }
});
