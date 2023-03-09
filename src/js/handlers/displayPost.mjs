import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");
/**
 * This export function renders single post with ID as parameter using posttemplate from templates/post.mjs.
 */

export async function displayPost(container) {
  const post = await postMethods.getPost(id);
  const postContainer = document.querySelector("#posts");
  templates.renderPostTemplate(post, postContainer);
}