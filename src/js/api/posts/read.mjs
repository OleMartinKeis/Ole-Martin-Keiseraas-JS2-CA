import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="get";


export async function getPosts() {

    const updatePostURL = `${API_SOCIAL_URL}${path}/?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(updatePostURL)

    return await response.json();
}

export async function getPost(id) {
    if (!id) {
        console.log("There was an error, please make sure there is a valid ID to your post.")
    }
    const getPostURL = `${API_SOCIAL_URL}${path}/${id}?_author=true&_comments=true&_reactions=true`;

    const response = await fetchWithToken(getPostURL)

    return await response.json();
}