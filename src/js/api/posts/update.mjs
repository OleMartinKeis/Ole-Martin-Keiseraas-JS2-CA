import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="put";

export async function updatePost(postData) {
    if (!postData.id) {
        console.log("There was an error, please make sure there is an valid ID to your post.")
    }
    const updatePostURL = `${API_SOCIAL_URL}${path}/${postData.id}`;

    const tagsArray = postData.tags.split(",");

    const response = await fetchWithToken(updatePostURL, {
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