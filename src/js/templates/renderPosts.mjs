import { PostThumbnail } from "./postThumbnail.mjs";
import { clearHTML } from "../tools/clear.mjs"
import { AlertMessage } from "./alertMessage.mjs";

export function renderPostThumbnails(posts, container) {
    const thumbnails = posts.map(post => (new PostThumbnail(post)).render());
    container.clear();
    container.append(...thumbnails);
}
  
export function renderPostThumbnailError(message, type, container) {
    const alert = new AlertMessage(message, type);
    container.clear();
    container.append(alert.render())
}