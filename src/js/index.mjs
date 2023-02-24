import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

import * as posts from "./api/posts/index.mjs"


const path = location.pathname;

if (path === '/profile/login/index.html') {
    setLoginFormListener();
} else if (path === '/profile/register/register.html') {
    setRegisterFormListener();
}



 
posts.getPost(3425).then(console.log)

 /*
 posts.createPost()
 
 posts.getPosts().then(console.log)
 posts.removePosts()

createPost({
    
    title: "Example",
    body: "also example"
 })

updatePost({
    id: 3417,
    title: "example post ypdated",
    body: "also example updated"
 })


 */

 
