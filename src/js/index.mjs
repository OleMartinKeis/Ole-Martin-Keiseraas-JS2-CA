import { getPosts } from "./api/posts/read.mjs";
import router from "./router.mjs"
import * as templates from "./templates/index.mjs";
import { setSearchListener } from "./search/index.mjs";
import { renderPostThumbnails } from "./templates/renderPosts.mjs";

const container = document.querySelector("#posts");

export async function displayPosts(posts, container) {
    try{
        const posts = await getPosts();
       
        setSearchListener(posts, container);
        
        templates.renderPostTemplates(posts, container);
        if (posts.length){
            
            renderPostThumbnails(posts, container);
        }
    }
    catch(error){
        console.log(error)
    }
}


displayPosts(posts, container);
router();