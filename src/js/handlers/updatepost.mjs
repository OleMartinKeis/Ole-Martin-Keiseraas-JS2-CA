import { getPost, updatePost } from "../api/posts/index.mjs";

/**
 * This targets the form for updating a post with updatePost()
 * The form gets all the values necessary to change the profile.
 * the button.disable makes sure that noone can submit the form before the form has loaded with the pre existing values.
 */


export async function setUpdatePostListener() {
    const form = document.querySelector("#updateForm");
    const url = new URL(location.href);
    const post = await getPost();
    
    const id = url.searchParams.get("id");
    console.log(url)
    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;



        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        form.media.value = post.media;

        button.disabled = false;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            post.id = id;

            updatePost(post);
        });
    }
}