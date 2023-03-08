import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/profiles";


export async function getProfiles() {

    const updateProfileURL = `${API_SOCIAL_URL}${path}`;

    const response = await fetchWithToken(updateProfileURL)

    return await response.json();
}

export async function getProfile(name) {

    const getProfileURL = `${API_SOCIAL_URL}${path}/${name}`;

    const response = await fetchWithToken(getProfileURL)

    return await response.json();
}