import { postsUrl, paramFilter } from "../components/api_endpoint_variables";

// API CALL FOR RETRIEVING POSTS

/**
 * Function for fetching posts from API using access token
 * displayPosts(singlePost) creates HTML for posting data from the API
 * searchPosts(posts) function is used for searching through posts
 */

export async function fetchPostsWithToken() {
    try {
        const accessToken = localStorage.getItem("accessToken");
        const fetchPosts = {
            method: "GET"
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }

        const response = await fetch(postsUrl, fetchPosts);
        const json = await response.json();
        console.log(json);
        
        displayPosts(singlePost);
        searchPosts(posts);

    } catch(error) {
        console.log(error);
    }
}

function displayPosts(singlePost) {
    for (let i = 0; i < singlePost.length; i++) {
        if (singlePost[i].media) {
            postsContainer.innerHTML += `
            <div>
            <div>
                <img src="${singlePost[i].author.avatar}">
            </div>
            <div>
                <p>${singlePost[i].author.name}</p>
            </div>         
            </div>`
        } else {
            postsContainer.innerHTML += `
            <div>
            <div>
                <img src="${singlePost[i].author.avatar}">
            </div>
            <div>
                <p>${singlePost[i].author.name}</p>
            </div>         
            </div>`
        }
    }
}


//  FUNCTION FOR SEARCHING THROUGH POSTS

function searchPosts (posts) {
    searchForm.onkeyup = function (event) {
        const searchValue = event.target.value.trim().toLowerCase();
        const filteredSearch = posts.filter(function (posts) {
            if (posts.title.toLowerCase().includes(searchValue)) {
                return true;
            }
        });
        displayResult(filteredSearch);
    };
}

function displayResult(posts) {
    postsContainer.innerHTML = "";
    posts.forEacg(function(post) {
        const {title, media, body, id, created, tags} = post;
        const {name} = post.author;
        if (post.)
    })
}

async function createNewPost(post) {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const postData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(post),
      };
      const response = await fetch(postsUrl, postData);
      const json = await response.json();
      console.log(json);
      window.location.href = "index.html";
    } catch (error) {
      console.log(error);
    }
  }