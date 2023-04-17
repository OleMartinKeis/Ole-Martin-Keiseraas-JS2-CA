import { removePost } from "../api/posts/delete.mjs";
import { load } from "../api/storage/index.mjs";



export function postTemplate(postData){

    if (Array.isArray(postData)) {
        return postData.map(postTemplate)
    }
    
    const profile = load("profile")

    const post = document.createElement("div");
    
    const container = document.querySelector("#posts");
    


    container.innerHTML += `
        <div class="card d-flex align-items-center justify-content-center mb-5" style="margin-top: 75px; padding: 15px; max-width: 30rem">
        <div class="user-profile card-header">
            <div class="user-header-cont flex-grow-1">
                <a class="text-decoration-none text-reset fw-bold" href="../profile/index.html?user=${postData.author ? postData.author.name : "Unknown"}"><h5>${postData.author ? postData.author.name : "Unknown"}</h5></a>
            </div>
        </div>
        <div class="d-flex align-items-center">
        <button class="btn delete-btn invisible btn-primary btn-sm"  data-id="${postData.id}">Delete Post</button>
        <a href="/post/index.html?id=${postData.id}" class="btn details-btn btn-primary btn-sm" data-id="${postData.id}" style="margin: 5px;">See details<a/>
        <a href="/post/edit/index.html?id=${postData.id}" class="btn edit-btn invisible btn-primary btn-sm" data-id="${postData.id}">Edit post<a/>
        </div>
        <hr>
        <div class="card-body" style="padding: 0;">
            <img class="img-fluid" src="${postData.media}"img-alt="${postData.title}"/>
            <hr>
            <h5 class="card-title text-break">${postData.title}</h5>
            <p class="card-text text-break">${postData.body}</p> 
            <hr>
            <p class="me-3"style="font-size: 0.68em;">Time of creation: ${postData.created}</p>
            <a href="#" class="btn btn-primary">Like</a>
        </div>
        <div class="card-footer text-muted d-flex align-items-center justify-content-around">
        <ul class="list-unstyled d-flex justify-content-between mb-0 pe-xl-5">
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg> ${postData._count.comments}
            </li>
            <li style="margin-left: 10px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-heart" viewBox="0 0 16 16">
                <path d="M10.058.501a.501.501 0 0 0-.5-.501h-2.98c-.276 0-.5.225-.5.501A.499.499 0 0 1 5.582 1a.497.497 0 0 0-.497.497V2a.5.5 0 0 0 .5.5h4.968a.5.5 0 0 0 .5-.5v-.503A.497.497 0 0 0 10.555 1a.499.499 0 0 1-.497-.499Z"/>
                <path d="M3.605 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h.5a.5.5 0 0 1 0 1h-.5Z"/>
                <path d="M8.068 6.482c1.656-1.673 5.795 1.254 0 5.018-5.795-3.764-1.656-6.69 0-5.018Z"/>
                </svg>${postData._count.reactions}
            </li>
        </ul>
        </div>
    </div>
    `


    

    const editBtn = document.querySelector(".edit-btn");
    const deleteBtn = document.querySelector(".delete-btn");



    if(postData.author.name === profile.name) {
        deleteBtn.classList.remove("invisible");
        editBtn.classList.remove("invisible");
        deleteBtn.addEventListener("click", () => {
            removePost(postData.id);
        });
    }
    
    return post;

    
}




export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
} 

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}
