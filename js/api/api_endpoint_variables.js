//  API endpoint

export const BASE_URL = "https://api.noroff.dev/api/v1/social/";

//  Home page

/**
 * API endpoint for retrieving posts
 * @param {string} url
 * ```js
 * postsUrl
 * ```
 */

export const postsUrl = `${BASE_URL}posts?_author=true`;

//  User registration

/**
 * API endpoint for user registration
 * @param {string} registerUrl
 * ```js
 * registerUrl
 * ```
 */

export const createAccountUrl = BASE_URL + "auth/register";

//  Single post profile

export const profileUrl = `${BASE_URL}profiles/`;

// Spesific post

export const postIdUrl = `${BASE_URL}posts/${postID}?_author=true`;
export const postID = params.get("postID");

//  Login page

/**
 * API endpoint for user login
 * @param {string} loginUrl
 * ```js
 * loginUrl
 * ```
 */

export const loginUrl = `${BASE_URL}auth/login`;

//  URL params

export const params = new URLSearchParams(window.location.search);

// Search filter

export const filterParam = params.get("filter");

// For fetching user

export const profileParam = params.get("user");
export const profilePostsUrl = `${profileUrl}${profileParam}/posts?_author=true`;
