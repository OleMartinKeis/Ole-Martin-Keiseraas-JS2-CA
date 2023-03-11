import * as templates from "../templates/index.mjs";
import * as postMethods from "../api/posts/index.mjs";
import { clearHTML } from "../tools/clear.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");
/**
 * This export function renders single post with ID as parameter using posttemplate from templates/post.mjs.
 */

export async function displayPost() {

  const post = await postMethods.getPost(id);
  const container = document.querySelector("#posts");
  
  templates.renderPostTemplate(post, container);
    if (templates.renderPostTemplate < 1) {
        container.innerHTML="";
    }
}