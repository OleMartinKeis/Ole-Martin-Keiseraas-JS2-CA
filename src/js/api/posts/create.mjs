import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="POST";

/** This fucntion will send a POST request to the server 
 * setCreatePostListener()  will use this function to create the post
 * 
 * @param {string} postData  data contents of post
 * @returns 
 */


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