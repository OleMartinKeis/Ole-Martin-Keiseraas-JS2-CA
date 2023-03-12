import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/profiles";
const method ="PUT";

/**updateProfile sends a token to the given url and the updated data in the response to update the values of banner and avatar to the api
 * 
 * @param {object} profileData 
 * @returns 
 */

export async function updateProfile(profileData) {
    if (!profileData.name) {
        console.log("There was an error, please make sure there is a valid name.")
    }
    const updateProfileURL = `${API_SOCIAL_URL}${path}/${profileData.name}/media`;

    const response = await fetchWithToken(updateProfileURL, {
        method,
        body: JSON.stringify(profileData),
    });
    return await response.json();
}