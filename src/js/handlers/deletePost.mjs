import { removePost } from "../api/posts/delete.mjs"

/**
 * This function allows the author to delete his post under the postId page
 */

export function deletePost() {
    const deleteButton = document.querySelector(".delete-btn")
    deleteButton.addEventListener("click", () => {
        removePost(postData.id);
    
        setTimeout(() => {
            location.reload();
        }, 200);
    });
}
