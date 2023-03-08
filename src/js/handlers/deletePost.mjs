import { removePost } from "../api/posts/delete.mjs"


export function deletePost() {
    const deleteButton = querySelector("button.btn.delete-btn")
    deleteButton.addEventListener("click", () => {
        removePost(id);
    
        setTimeout(() => {
            location.reload();
        }, 200);
    });
}
