import * as handlers from "./handlers/index.mjs"
import  listenToSearch  from "./search/search.mjs"

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



