import * as handlers from "./handlers/index.mjs"
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs"


const path = location.pathname;

if (path === '/profile/login/index.html') {
    handlers.setLoginFormListener();
} else if (path === '/profile/register/register.html') {
    handlers.setRegisterFormListener();
} else if (path === '/post/create/index.html') {
    handlers.setCreatePostListener();
} else if (path === '/post/edit/') {
    handlers.setUpdatePostListener();
} else if (path === '/profile/edit/') {
    handlers.setUpdateProfileListener();
}
 
// async function testTemplate() {
//     const posts = await postMethods.getPosts();
//     const container = document.querySelector("#post")
//     templates.renderPostTemplates(posts, container)
// }

// testTemplate();