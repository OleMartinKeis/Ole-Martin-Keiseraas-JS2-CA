import { getPost } from "../api/posts/read.mjs";
import { displayPosts } from "../index.mjs";




export function setSearchListener(posts, container) {
    const searchForm = document.querySelector("form#search");

    if(searchForm){
        searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const searchTerm = form.term.value;
           
            // const filteredPosts = posts.filter(post => {post.title.includes(searchTerm)})

            const filteredPosts = posts.filter(post => {
                const title = post.title.toLowerCase();
                const body = post.body.toLowerCase();
                const term = searchTerm.toLowerCase();
                const tagsMatch = Boolean(post.tags.map(tag => tag.toLowerCase()).filter(tag => tag.includes(term)).length);
                return title.includes(term) || body.includes(term) || tagsMatch; 
            });
            

            console.log(filteredPosts)
        });
    }
}




