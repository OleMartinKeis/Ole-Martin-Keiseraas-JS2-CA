import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/posts";
const method ="put";

/**updatePost allows the authopr to up date the values of a post he has previously created.
 * 
 * @param {object} postData 
 * @returns body of response
 */

export async function updatePost(postData) {


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