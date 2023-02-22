import { API_SOCIAL_URL } from "../constants.mjs"

const path ="/auth/register";
const method ="POST";

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + path;
    
    try {
        const response = await fetch(registerURL, {
        
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
        
    });

    const result = await response.json();
    alert("You are now registered")
    console.log(result)
    return result
    }

    catch{
        console.log(error)
    }

}


