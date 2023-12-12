import { logOut } from "../components/variables.js";

export function logOutUser() {
    logOut.addEventListener("click", (event) => {
        localStorage.clear();
    });
}