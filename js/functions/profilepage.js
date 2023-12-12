import { profilePostsURL, ProfileURL } from "../components/api_endpoint_variables.js";

const accessToken = localStorage.getItem("accessToken");

export async function fetchUserProfile() {
    try {
        const profileName = localStorage.getItem("profileName");
        const singleProfile = ProfileURL + profileName;
        const fetchProfile = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await fetch(singleProfile, fetchProfile);
        const json = await response.json();
        console.log(json);

        
    } catch(error) {
        console.log(error);
    }
}

export async function fetchProfilePosts() {
    try {
        const getPosts = {
            method: "GET",
            header: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        };

        const response = await fetch(profilePostsURL, getPosts)
        const json = await response.json();
        console.log(json);

    } catch(error) {
        console.log(error);
    }
}

function displayProfilePosts(post) {
    for (let i = 0; i < post.length; i++) {
        profilePostsContainer.innerHTML += `
            <div class="row p-5">
            <a href="spe
            </div>
            `
        }
    }

