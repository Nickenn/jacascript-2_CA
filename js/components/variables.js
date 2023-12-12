//  Home page

export const postsContainer = document.querySelector(".posts-container");
export const updatePostBtn = document.querySelector(".update-post-btn");
export const deletePostBtn = document.querySelector("#delete-post-btn");

//  User registration page

export const userRegistrationForm =
  document.querySelector("#user-registration");
export const userRegistrationMessage = document.querySelector(
  ".user-registration-message"
);

//  Login page

export const loginForm = document.querySelector("#login-form");
export const loginErrorMessage = document.querySelector(".login-error-message");

//  Profile page

export const profilePostsContainer = document.querySelector(
  ".profile-posts-container"
);
export const profilePostsBtn = document.querySelector(".profile-posts-btn");

//  Update post

export const updatePostMedia = document.querySelector(".posts-img");
export const updatePostTitle = document.querySelector("#update-post-title");
export const updatePostBody = document.querySelector("#update-post-body");

//  Log out

export const logOut = document.querySelector(".log-out");

//  Access token

export const accessToken = localStorage.getItem("accessToken");

//  Form validation

export const form = document.querySelector("#Form");
export const fullName = document.querySelector("#name");
export const password = document.querySelector("#password");
export const button = document.querySelector(".btn-submit");

export const nameError = document.querySelector("#nameError");
export const emailError = document.querySelector("#emailError");
