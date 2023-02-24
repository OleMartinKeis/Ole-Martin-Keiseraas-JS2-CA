import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="POST";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + path;

    const response = await fetchWithToken(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json();
}