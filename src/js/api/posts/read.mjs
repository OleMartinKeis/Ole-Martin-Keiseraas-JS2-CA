import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";

/**getPosts gets the first 100 posts from the api with the URL below. 
 * getPost(id) gets one post by ID
 * 
 * @returns 
 */

export async function getPosts() {

    const getPostsURL = `${API_SOCIAL_URL}${path}?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(getPostsURL)

    return await response.json();
}

export async function getPost(id) {
    if (!id) {
        console.log("There was an error, please make sure there is a valid ID to your post.")
    }
    const getPostURL = `${API_SOCIAL_URL}${path}/${id}?&_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(getPostURL)
    
    return await response.json();
}