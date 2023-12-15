//      Access token

export const token = localStorage.getItem("accessToken");

//      Create account page

export const createAccountForm = document.querySelector("#create-account");
export const createAccountMessage = document.querySelector(
  ".create-account-message"
);

//      Login page

export const loginForm = document.querySelector("#login-form");
export const loginError = document.querySelector(".login-error");

//      Index page

export const postsContainer = document.querySelector(".post-container");
export const createPostForm = document.querySelector(".create-post");
export const profileNavLink = document.querySelector(".profile-link");
export const loggedInProfile = localStorage.getItem("profileName");
export const searchForm = document.querySelector(".search-form");

//      Filter buttons

export const postsWithImagesButton = document.querySelector(".posts-img");
export const allPostsButton = document.querySelector(".all-posts");
export const postsWithoutImagesButton = document.querySelector(".posts-no-img");

//       Single post page

export const postContainer = document.querySelector(".specific-post-container");
export const authButtonsContainer = document.querySelector(
  ".auth-buttons-container"
);
export const updatePostButton = document.querySelector(".btn-update-post");
export const deletePostButton = document.querySelector("#btn-delete-post");

//       Update post variables

export const updateTitle = document.querySelector("#update-title");
export const updateBody = document.querySelector("#update-body");
export const updateMedia = document.querySelector("#update-media");

//       Profile page

export const profileContainer = document.querySelector(".profile-container");
export const profilePostsButton = document.querySelector(".profile-posts");

//       Log out

export const logOut = document.querySelector(".log-out");
