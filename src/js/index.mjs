import { login } from "./api/auth/login.mjs";
import { getPosts } from "./api/posts/read.mjs";
import * as handlers from "./handlers/index.mjs";
import router from "./router.mjs"
import * as templates from "./templates/index.mjs";
import { setSearchListener } from "./search/index.mjs";
import { createPost } from "./api/posts/create.mjs";
import { renderPostTemplates } from "./templates/index.mjs";

const container = document.querySelector("#posts");

export async function displayPosts(postDataList, container) {
    try{
        const posts = await getPosts();
       
        setSearchListener(posts, container);
        
        templates.renderPostTemplates(posts, container);
        if (posts.length){
            
            // renderPostThumbnails(filteredPosts, container);
            renderPostTemplates(filteredPosts, container);
        }
    }
    catch(error){
        console.log(error)
    }
}




// createPost();
displayPosts(posts, container);
router();