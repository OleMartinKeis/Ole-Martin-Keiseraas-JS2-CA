import { getPosts } from "./api/posts/read.mjs";
import * as handlers from "./handlers/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import * as profileMethods from "./api/profile/index.mjs"
import * as templates from "./templates/index.mjs";
import { setSearchListener } from "./search/index.mjs";
import { displayPosts } from "./templates/displayPost.mjs";
// import { renderPostThumbnails } from "./templates/renderPosts.mjs";
import { getPost } from "./api/posts/read.mjs";
import { updatePost } from "./api/posts/index.mjs";


const container = document.querySelector("#posts");


const path = location.pathname;

if (path === "/profile/login/" || path === "/profile/login/index.html") {
    handlers.setLoginFormListener()
} else if (path === "/profile/register/" || path === "/profile/register/register.html"){
    handlers.setRegisterFormListener();
}
else if (path === "/post/create/" || path === "/post/create/index.html"){
    handlers.setCreatePostListener();
    
}
else if (path === "/post/edit/" || path === "/post/edit/index.html"){
    handlers.setUpdatePostListener();
    
}
else if (path === "/profile/edit/" || path === "/profile/edit/index.html"){
    handlers.setUpdateProfileListener();

} else if (path === "/posts/" || path === "/posts/index.html") {
    displayPosts(posts, container);
} else if (path === "/profile/" || path === "/profile/index.html") {
    handlers.readProfile();
} else if (path === "/post/") {
    handlers.readPost();
}

// getPost(4281).then(console.log)
// path === `/post/edit/${id}`