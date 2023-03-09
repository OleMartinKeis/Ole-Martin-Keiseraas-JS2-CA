import { getPosts } from "../api/posts/read.mjs";
import { setSearchListener } from "../search/index.mjs";
import { renderPostTemplates } from "./post.mjs";
// import { renderPostThumbnails } from "./renderPosts.mjs";


/**This function displays all the posts in posts/index.html
 * It calls the search function in search/index.mjs to ensure searching posts work.
 * If (posts.length) shows post it calls the renderPostThumbnail to render the template of the posts who have been filter, 
 * if it has been filtered
 * @param {object} postDataList 
 * @param {object} container 
 */
export async function displayPosts(postDataList, container) {
    const posts = await getPosts();
   
    try{
        setSearchListener(posts, container);

        if (posts.length){
            
            renderPostTemplates(posts, container);
        }
    }
    catch(error){
        console.log(error)
    }
    
   
}

