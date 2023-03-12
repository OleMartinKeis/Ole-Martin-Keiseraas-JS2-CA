import { updateProfile } from "../api/profile/index.mjs";

import { load } from "../api/storage/index.mjs";


/**
 * This functions listenes for submitting the editProfile form under /profile/edit/index.html to change either banner or avatar for the profile who is logged in
 * the button.disable makes sure that noone can submit the form before the form has loaded with the pre existing values.
 */

export async function setUpdateProfileListener() {
    const form = document.querySelector("#editProfile");
    const setAvatar = document.querySelector("#avatar");
    const firstName = document.querySelector("#firstName");
   
    if (form) {
        const {name, email, banner, avatar} = load("profile");
        console.log("name", name)    
        const button = form.querySelector("button");
        button.disabled = true;
        
        form.name.value = name;
        form.email.value = email;
        form.banner.value = banner;
        form.avatar.value = avatar;
    
        setAvatar.innerHTML = `<img src="${avatar}"
        class="img-fluid img-thumbnail rounded-circle mb-2"
        style="width: 150px; height: 150px; margin-top:-15px; z-index: 1"></img>`;
        
        firstName.innerHTML = `${name}`;

        
        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
    
            profile.name = name;
            profile.email = email;
    
            updateProfile(profile)
        });
    }
}