import {
  userRegistrationForm,
  userRegistrationMessage,
} from "../components/variables.js";
import { registerUrl } from "../components/api_endpoint_variables.js";

//  USER REGISTRATION FUNCTION

export function userRegistrationEvent() {
  userRegistrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userRegistrationForm = event.target;
    const formData = new FormData(userRegistrationForm);
    const userProfile = Object.fromEntries(formData.entries());
    console.log(userProfile);

    createNewUser(user);
  });
}

//  USER REGISTRATION POST REQUEST

async function createNewUser(user) {
  try {
    const userData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(registerUrl, userData);
    const json = await response.json();
    console.log(json);

    displayMessage(json);
  } catch (error) {
    console.log(error);
  }
}

//  MESSAGE FOR SUCCESSFUL OR UNSUCCESSFUL REGISTRATION

function displayMessage(message) {
  if (message !== true) {
    userRegistrationMessage.innerHTML = `Your account creation was successful!<a href="loginpage.html" class="link">Click here to log in.</a>`;
  } else {
    userRegistrationMessage.innerHTML = `An error has occured. Please try again.`;
  }
}
