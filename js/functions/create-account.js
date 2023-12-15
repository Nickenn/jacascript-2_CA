import {
  createAccountForm,
  createAccountMessage,
} from "../components/variables.js";
import { createAccountUrl } from "../api/contants.js";

/**
 *  Function for creating a new account
 *  @param { Class } formData Creates a key/value pair based on the data from the account creation form
 *  @param { object } profile Turns the formData into an object
 */

export function setCreateAccountListener() {
  createAccountForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const createAccountForm = event.target;
    const formData = new FormData(createAccountForm);
    const profile = Object.fromEntries(formData.entries());

    createAccount(profile);
  });
}

/**
 * Function that sends the formdata to the API for user creation
 *
 * @param { string } url account creation url
 * @param { object } data from a account creation form
 * @returns { string } sends data to the API
 */

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
    displayMessage(result);
  } catch (error) {
    console.log(error);
  }
}

// Display message for successfull registration of new account
function displayMessage(message) {
  if (message !== true) {
    createAccountMessage.innerHTML = `Account creation successful, <a href="login.html" class="link">please log in here.</a>`;
  } else {
    createAccountMessage.innerHTML = `Account creation was unsuccessful. Please try again.`;
  }
}
