import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="delete";

export async function removePost(id) {
    if (!id) {
        console.log("There was an error, please make sure there is an valid ID to your post.")
    }
    const updatePostURL = `${API_SOCIAL_URL}${path}/${id}`;

    const response = await fetchWithToken(updatePostURL, {
        method,
    })
    return await response.json();
}