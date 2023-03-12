import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";

<<<<<<< HEAD

export async function getPosts() {

    const updatePostURL = `${API_SOCIAL_URL}${path}?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(updatePostURL)
=======
/**getPosts gets the first 100 posts from the api with the URL below. 
 * getPost(id) gets one post by ID
 * 
 * @returns 
 */

export async function getPosts() {

    const getPostsURL = `${API_SOCIAL_URL}${path}?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(getPostsURL)
>>>>>>> js2

    return await response.json();
}

export async function getPost(id) {
    if (!id) {
        console.log("There was an error, please make sure there is a valid ID to your post.")
    }
<<<<<<< HEAD
    const getPostURL = `${API_SOCIAL_URL}${path}/${id}`;

    const response = await fetchWithToken(getPostURL)

=======
    const getPostURL = `${API_SOCIAL_URL}${path}/${id}?&_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(getPostURL)
    
>>>>>>> js2
    return await response.json();
}