import { API_SOCIAL_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/profiles";


export async function getProfiles() {

    const updateProfileURL = `${API_SOCIAL_URL}${path}?_following=true&_followers=true`;

    const response = await fetchWithToken(updateProfileURL)

    return await response.json();
}

export async function getProfile(id) {

    const getProfileURL = `${API_SOCIAL_URL}${path}/?id=${id}&_following=true&_followers=true`;

    const response = await fetchWithToken(getProfileURL)

    return await response.json();
}