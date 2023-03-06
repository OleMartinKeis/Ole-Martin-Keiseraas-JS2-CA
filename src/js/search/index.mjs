import { getPost } from "../api/posts/read.mjs";



export function setSearchListener(posts) {
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
                return title.includes(term) || body.includes(term); 
            });


            console.log(filteredPosts)

        });
    }
}




