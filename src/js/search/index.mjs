// import { getPost } from "../api/posts/read.mjs";
// import { displayPosts } from "../index.mjs";

import { debounce } from "../tools/debounce.mjs";
import { renderPostThumbnails, renderPostThumbnailError } from "../templates/renderPosts.mjs";
import { displayPosts } from "../index.mjs";

// export function setSearchListener(posts, container) {
//     const searchForm = document.querySelector("form#search");

//     if(searchForm){
//         searchForm.addEventListener("submit", (event) => {
//             event.preventDefault();
//             const form = event.target;
//             const searchTerm = form.term.value;
           
//             // const filteredPosts = posts.filter(post => {post.title.includes(searchTerm)})

//             const filteredPosts = posts.filter(post => {
//                 const title = post.title.toLowerCase();
//                 const body = post.body.toLowerCase();
//                 const term = searchTerm.toLowerCase();
//                 const tagsMatch = Boolean(post.tags.map(tag => tag.toLowerCase()).filter(tag => tag.includes(term)).length);
//                 return title.includes(term) || body.includes(term) || tagsMatch; 
//             });
            

//             console.log(filteredPosts)
//         });
//     }
// }

export function setSearchListener(posts, container) {
    function onSearch(event) {
      event.preventDefault();
      
      const searchTerm = event.target.value;
  
      if (!searchTerm.length) {
        renderPostThumbnails(posts, container);
        return
      }
  
      if (searchTerm.length < 4) {
        return
      }
  
      const term = searchTerm.toLowerCase();
    
      const filteredPosts = posts.filter(function (post) {
        const title = post.title.toLowerCase();
  
        const body = post.body ? post.body.toLowerCase() : "";
        const author = post.author.name.toLowerCase();
    
        const tagsMatch = Boolean(post.tags.map(tag => tag.toLowerCase()).filter(tag => tag.includes(term)).length)
    
        return title.includes(term) || body.includes(term) || author.includes(term) || tagsMatch;
      })
    
      if (filteredPosts.length > 0) {
        renderPostThumbnails(filteredPosts, container);
      } else {
        renderPostThumbnailError("There are no messages that match your search term.", "warning", container)
      }
    }
  
    const searchForm = document.querySelector("form#search");
  
    searchForm.addEventListener("input", debounce(onSearch, 150));
  }


displayPosts()