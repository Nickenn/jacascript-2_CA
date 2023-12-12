import { setUserLogin } from "./functions/loginpage.js";
import { accessToken } from "./components/variables.js"

setUserLogin();

if (accessToken) {
    window.location.href = "index.html";
}

