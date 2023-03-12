import * as profileTemplate from "../templates/profile.mjs";
import * as profileMethods from "../api/profile/index.mjs";
import { load } from "../api/storage/index.mjs"

const url = new URL(location.href);
const name = url.searchParams.get("name");

/**
 * This function loads profile using the load function and renders it on the profile page
 * 
 */

export async function readProfile() {
    const profile = load("profile")
    if (!profile) {
        location.href = "/"
    }
    const response = await profileMethods.getProfile(profile.name);
    const profileContainer = document.querySelector("#profileContainer");
    profileTemplate.renderProfileTemplate(response, profileContainer);
}