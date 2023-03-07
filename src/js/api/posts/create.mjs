import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="POST";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + path;

    const tagsArray = postData.tags.split(",");

    const response = await fetchWithToken(createPostURL, {
        method,
        headers: headers("application/json"),
        body: JSON.stringify({
            title: postData.title,
            body: postData.body,
            media: postData.media,
            tags: tagsArray,
        }),
    });
    
    return await response.json();
}