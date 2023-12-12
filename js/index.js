import { fetchPostsWithToken } from "./functions/index.js";
import { logOutUser } from "./functions/logout.js";
import { accessToken } from "./components/variables.js"

fetchPostsWithToken();
logOutUser();

if (!accessToken) {
    window.location.href = "loginpage.html";
}
