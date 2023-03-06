import { login } from "./api/auth/login.mjs";
import { getPosts } from "./api/posts/read.mjs";
import * as handlers from "./handlers/index.mjs";
import router from "./router.mjs"
import * as templates from "./templates/index.mjs";
import { setSearchListener } from "./search/index.mjs";
import { createPost } from "./api/posts/create.mjs";
async function displayPosts() {
    try{
        const posts = await getPosts();
        setSearchListener(posts);
        const container = document.querySelector("#posts")
        templates.renderPostTemplates(posts, container)
    }
    catch(error){
        console.log(error)
    }
}

// createPost();
displayPosts();
router();