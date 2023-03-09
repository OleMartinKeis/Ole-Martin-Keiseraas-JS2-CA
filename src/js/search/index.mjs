import { getPosts } from "../api/posts/read.mjs";
import { postTemplate } from "../templates/post.mjs";
import { debounce } from "../tools/debounce.mjs";
// import { renderPostThumbnails, renderPostThumbnailError } from "../templates/renderPosts.mjs";

/**
 * 
 * @param {*} posts 
 * @param {*} container 
 */

export function setSearchListener(posts, container) {
    function onSearch(event) {
      event.preventDefault();
      
      const searchTerm = event.target.value;
  
      if (!searchTerm.length) {
        postTemplate(posts, container);
        return
      }
  
      if (searchTerm.length < 4) {
        return
      }
  
      const term = searchTerm.toLowerCase();
    
      const filteredPosts = posts.filter((post) => {
        const title = post.title.toLowerCase();
  
        const body = post.body ? post.body.toLowerCase() : "";
        const author = post.author.name.toLowerCase();
    
        const tagsMatch = Boolean(post.tags.map(tag => tag.toLowerCase()).filter(tag => tag.includes(term)).length)
    
        return title.includes(term) || body.includes(term) || author.includes(term) || tagsMatch;
      })
    
      if (filteredPosts.length > 0) {
        postTemplate(filteredPosts);
      } else {
        return("There are no messages that match your search term.", "warning", container)
      }
    }
  
    const searchForm = document.querySelector("form#search");
  
    searchForm.addEventListener("input", debounce(onSearch, 150));
  }


