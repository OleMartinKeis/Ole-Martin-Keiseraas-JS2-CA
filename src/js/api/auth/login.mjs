import { API_SOCIAL_URL } from "../constants.mjs"

const path ="/auth/login";
const method ="post";

export async function login(profile) {
    const loginURL = API_SOCIAL_URL + path;
    const body = JSON.stringify(profile)

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json();
    console.log(result);

}