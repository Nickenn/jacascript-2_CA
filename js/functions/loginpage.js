import { loginUrl } from "../components/api_endpoint_variables.js";
import { loginForm } from "../functions/loginpage.js";
import {
  form,
  password,
  nameError,
  emailError,
} from "../components/variables.js";

export function setUserLogin() {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginForm = event.target;
    const formData = new FormData(loginForm);
    const loginInfo = Object.fromEntries(formData.entries());
    console.log(loginInfo);

    userLogin(loginUrl, loginInfo);
  });
}

async function userLogin(url, data) {
  try {
    const userAccountData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, userAccountData);
    const json = response.json();
    const accessToken = json.accessToken;

    localStorage.setItem("accessToken", accessToken);
    if (accessToken) {
      window.location.href = "index.html";
    }
  } catch (error) {
    console.log(error);
  }
}

function validateForm() {
  event.preventDefault();

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checklength(password.value, 8) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function formSubmit(event) {
  event.preventDefault();

  if (validateForm) {
    message.innerHTML = `<div class="message">Login successful!</div>`;
    form.reset();
  } else {
    message.innerHTML = `<div class="message">An error has occured, please try again.</div>`;
  }
}

form.addEventListener("submit", formSubmit);

function checklength(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const reqExample = /\S+@\S+\.\S+/;
  const patternMatches = reqExample.test(email);
  return patternMatches;
}
