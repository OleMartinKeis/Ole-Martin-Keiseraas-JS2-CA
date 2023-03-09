import { removePost } from "../api/posts/delete.mjs";



export function postTemplate(postData){
    const post = document.createElement("div");
    
    const container = document.querySelector("#posts");

    container.innerHTML += `
        <div class="card d-flex align-items-center justify-content-center mb-5" style="margin-top: 75px; padding: 15px;">
        <div class="user-profile card-header">
            <div class="user-header-cont flex-grow-1">
                <a class="text-decoration-none text-reset fw-bold" href="profile.html?user=${postData.author.name}"><h5>${postData.author.name}</h5></a>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-space-between">
        <button class="btn follow-btn" data-id="${postData.id}">Follow</button>
        <button class="btn delete-btn" data-id="${postData.id}">Delete Post</button>
        <a href="/post/index.html?id=${postData.id}" class="btn details-btn" data-id="${postData.id}">See details</>
        </div>
        <hr>
        <div class="card-body">
            <img class="img-fluid" src="${postData.media}"img-alt="This is the alt text"/>
            <hr>
            <h5 class="card-title">${postData.title}</h5>
            <p class="card-text">${postData.body}</p> 
            <hr>
            <a href="#" class="btn btn-primary">Like</a>
        </div>
        <div class="card-footer text-muted d-flex align-items-center justify-content-around">
        </div>
    </div>
    `
   
    if(postData.media) {
        const img = document.createElement('img');
        img.classList.add("img-fluid")
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img);
    }

    const deleteButton = document.querySelector(".delete-btn")
    deleteButton.addEventListener("click", () => {
        removePost(postData.id);
    });

    return post;
}




export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
} 

export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}