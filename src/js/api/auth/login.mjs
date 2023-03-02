import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../storage/index.mjs";


const path ="/auth/login";
const method ="POST";

export async function login(profile) {
    
    console.log(profile)

  const loginURL = API_SOCIAL_URL + path;
  const body = JSON.stringify(profile);
  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", usr);

  alert("You are logged in now");
}

// https://api.noroff.dev/api/v1/social/auth/login 