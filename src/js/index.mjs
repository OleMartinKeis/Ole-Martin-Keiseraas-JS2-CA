<<<<<<< HEAD
import { getPosts } from "./api/posts/read.mjs";
import * as handlers from "./handlers/index.mjs"
import * as postMethods from "./api/posts/index.mjs"
import * as profileMethods from "./api/profile/index.mjs"
import * as templates from "./templates/index.mjs";
import { setSearchListener } from "./search/index.mjs";
import { displayPosts } from "./templates/displayPost.mjs";
import { renderPostThumbnails } from "./templates/renderPosts.mjs";
import { getPost } from "./api/posts/read.mjs";


const container = document.querySelector("#posts");


=======
import * as handlers from "./handlers/index.mjs"
import listenToSearch  from "./search/search.mjs"

const container = document.querySelector("#posts");

>>>>>>> js2
const path = location.pathname;

if (path === "/profile/login/" || path === "/profile/login/index.html") {
    handlers.setLoginFormListener()
<<<<<<< HEAD
} else if (path === "/profile/register/" || path === "/profile/register/index.html"){
=======
} else if (path === "/profile/register/" || path === "/profile/register/register.html"){
>>>>>>> js2
    handlers.setRegisterFormListener();
}
else if (path === "/post/create/" || path === "/post/create/index.html"){
    handlers.setCreatePostListener();
<<<<<<< HEAD
    postMethods.createPost(post);
}
else if (path === "/post/edit/" || path === "/post/edit/index.html" ){
    handlers.setUpdatePostListener();
    postMethods.updatePost();
}
else if (path === "/profile/edit/" || path === "/profile/edit/index.html"){
    handlers.setUpdateProfileListener();
    profileMethods.updateProfile();
} else if (path === "/posts/" || path === "/posts/index.html") {
    displayPosts(posts, container);
}

// getPost(4281).then(console.log)
// || path === `/post/edit/${id}`
=======
}
else if (path === "/post/edit/" || path === "/post/edit/index.html"){
    handlers.setUpdatePostListener();
}
else if (path === "/profile/edit/" || path === "/profile/edit/index.html"){
    
    handlers.readProfile();
    handlers.setUpdateProfileListener();
} else if (path === "/posts/" || path === "/posts/index.html") {
    handlers.displayPosts( container);
    listenToSearch()
} else if (path === "/profile/" || path === "/profile/index.html") {
    handlers.readProfile();
} else if (path === "/post/" || path === "/post/index.html") {
    handlers.displayPost();
}



>>>>>>> js2
