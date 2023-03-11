import { API_SOCIAL_URL } from "../api/constants.mjs"
import { fetchWithToken } from "../api/fetchWithToken.mjs";
import { postTemplate } from "../templates/post.mjs";

export async function doSearch(event) {
    const tag = document.querySelector("#searchBar").value;

    if (tag) {

        event.preventDefault();
        const url = `${API_SOCIAL_URL}/posts/?_tag=${tag}`;
        const response = await fetchWithToken(url);
        const container = document.querySelector("#posts")
        const data = response.json();
        console.log(data)
        container.innerHTML= "";
        postTemplate(data)
    }
  

}

export default function listenToSearch() {
    const searchForm = document.querySelector("form#search");
    searchForm.addEventListener("submit", doSearch)
}


