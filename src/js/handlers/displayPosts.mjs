import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";
// import { setSearchListener } from "../search/index.mjs";
import { renderPostTemplates } from "../templates/post.mjs";
import { doSearch } from "../search/search.mjs";
// import { renderPostThumbnails } from "./renderPosts.mjs";


/**This function displays all the posts in posts/index.html
 * It calls the search function in search/index.mjs to ensure searching posts work.
 * If (posts.length) shows post it calls the renderPostThumbnail to render the template of the posts who have been filter, 
 * if it has been filtered
 * @param {object} postDataList 
 * @param {object} container 
 */
export async function displayPosts(container) {
    const posts = await postMethods.getPosts();

    try{
        doSearch(posts);

        if (posts.length){
            
            templates.postTemplate(posts, container);
        }
    }
    catch(error){
        console.log(error)
    }
    
   
}

