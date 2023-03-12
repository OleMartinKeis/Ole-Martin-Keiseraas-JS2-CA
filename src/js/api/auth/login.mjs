import { API_SOCIAL_URL } from "../constants.mjs";
import * as storage from "../storage/index.mjs";


const path ="/auth/login";
const method ="POST";
/**
 * This function checks your login credentials with the server.
 * If correct this will give you the accessToken (JWT) and let you for example; get a post feed and edit your profile!
 * @param {object} profile list of necessities to access profile
 */


export async function login(profile) {

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

  storage.save("profile", user);

  alert("You are logged in now");

  location.href ="/posts/index.html"
}

