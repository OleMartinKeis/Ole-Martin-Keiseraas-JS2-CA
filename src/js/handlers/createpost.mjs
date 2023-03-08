import { createPost } from "../api/posts/index.mjs";

/**
 * This function targets the form for creating a post with createPost()
 */
export function setCreatePostListener() {

    const form = document.querySelector("form#createPost")

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            
        createPost(post);
    });
}