import { API_SOCIAL_URL } from "../constants.mjs"

const path ="/auth/register";
const method ="post";

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + path;
    const body = JSON.stringify(profile)

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json();
    console.log(result);

}