import { getPosts } from "./api/posts/read.mjs";
import * as handlers from "./handlers/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import * as profileMethods from "./api/profile/index.mjs"
import * as templates from "./templates/index.mjs";
import { setSearchListener } from "./search/index.mjs";
import { displayPosts } from "./templates/displayPost.mjs";
import { renderPostThumbnails } from "./templates/renderPosts.mjs";



const container = document.querySelector("#posts");



const path = location.pathname;

if (path === "/profile/login/") {
    handlers.setLoginFormListener()
} else if (path === "/profile/register/"){
    handlers.setRegisterFormListener();
   
}
else if (path === "/post/create/"){
    handlers.setCreatePostListener();
    postMethods.createPost(post);
}
else if (path === "/post/edit/"){
    handlers.setUpdatePostListener();
    postMethods.updatePost(postData);
}
else if (path === "/profile/edit/"){
    handlers.setUpdateProfileListener();
    profileMethods.updateProfile();
} else if (path === "/posts/index.html") {
    displayPosts(posts, container);
}

