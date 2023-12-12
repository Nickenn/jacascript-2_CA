import {
  createAccountForm,
  createAccountMessage,
} from "../components/variables.js";
import { createAccountUrl } from "../api/contants.js";

// Create account function
export function setCreateAccountListener() {
  createAccountForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const createAccountForm = event.target;
    const formData = new FormData(createAccountForm);
    const profile = Object.fromEntries(formData.entries());
    console.log(createAccountForm);
    console.log(formData);
    console.log(profile);

    createAccount(profile);
  });
}

// Send the userdata to API
async function createAccount(profile) {
  try {
    const accountData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    };

    const response = await fetch(createAccountUrl, accountData);
    const result = await response.json();
    console.log(response);
    console.log(result);
    displayMessage(result);
  } catch (error) {
    console.log(error);
  }
}

// Display feedback for if the registration was successful or not
function displayMessage(message) {
  if (message !== true) {
    createAccountMessage.innerHTML = `Yay! You're account has been registrered, <a href="login.html" class="link">please log in here.</a>`;
  } else {
    createAccountMessage.innerHTML = `Something went wrong. Please try again.`;
  }
}
