import { getPosts } from "../api/posts/read.mjs";
import { setSearchListener } from "../search/index.mjs";
import { renderPostThumbnails } from "./renderPosts.mjs";

export async function displayPosts(postDataList, container) {
    const posts = await getPosts();
    try{
        
       
        setSearchListener(posts, container);
        

        if (posts.length){
            
            renderPostThumbnails(posts, container);
        }
    }
    catch(error){
        console.log(error)
    }
    getPosts()
   
}

