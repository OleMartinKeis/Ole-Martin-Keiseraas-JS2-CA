import { removePost } from "../api/posts/delete.mjs"


export function deletePost() {
    const deleteButton = document.querySelector(".delete-btn")
    deleteButton.addEventListener("click", () => {
        removePost(postData.id);
    
        setTimeout(() => {
            location.reload();
        }, 200);
    });
}
