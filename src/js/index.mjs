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

if (path === "/profile/login/" || path === "/profile/login/index.html") {
    handlers.setLoginFormListener()
} else if (path === "/profile/register/" || path === "/profile/register/index.html"){
    handlers.setRegisterFormListener();
}
else if (path === "/post/create/" || path === "/post/create/index.html"){
    handlers.setCreatePostListener();
    postMethods.createPost(post);
}
else if (path === "/post/edit/" || path === "/post/edit/index.html"){
    handlers.setUpdatePostListener();
    postMethods.updatePost(postData);
}
else if (path === "/profile/edit/" || path === "/profile/edit/index.html"){
    handlers.setUpdateProfileListener();
    profileMethods.updateProfile();
} else if (path === "/posts/" || path === "/posts/index.html") {
    displayPosts(posts, container);
}
