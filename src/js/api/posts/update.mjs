import { API_SOCIAL_URL } from "../constants.mjs";
import { createPost } from "./create.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="PUT";

export async function updatePost(postData) {
    if (!postData.id) {
        console.log("There was an error")
    }
    const updatePostURL = `${API_SOCIAL_URL}${path}/${postData.id}`;

    const response = await fetchWithToken(updatePostURL, {
        method,
        title: "string",
        tags: ["string"],
        media: "https://url.com/image.jpg",
        body: JSON.stringify(postData)
    })
    console.log(postData.id)
    return await response.json();
}