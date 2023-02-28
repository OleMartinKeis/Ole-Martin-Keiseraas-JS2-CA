import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="POST";

export async function createPost(postData) {
    const createPostURL = API_SOCIAL_URL + path;

    const tagsArray = postData.tags.split(",");

    const response = await fetchWithToken(createPostURL, {
        method,
        body: JSON.stringify({
            title: postData.title,
            body: postData.body,
            media: postData.media,
            tags: tagsArray,
        }),
    });

    return await response.json();
}