import { API_SOCIAL_URL } from "../api/constants.mjs"
import { fetchWithToken } from "../api/fetchWithToken.mjs";
import { postTemplate } from "../templates/post.mjs";
export async function doSearch(event) {
    event.preventDefault();
    const tag = document.querySelector("#searchBar").value;
    const url = `${API_SOCIAL_URL}/posts/?_tag=${tag}`;
    const response = await fetchWithToken(url);
    const data = response.json();
    postTemplate(data)

}

export default function listenToSearch() {
    const searchForm = document.querySelector("form#search");
    searchForm.addEventListener("submit", doSearch)
    
}


