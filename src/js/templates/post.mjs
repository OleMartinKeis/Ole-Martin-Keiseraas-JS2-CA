


export function postTemplate(postData){
    const post = document.createElement("div");
    // post.classList.add("post",  "card-header" , "d-flex", "justify-content-center");

    post.innerText = postData.title;
    post.innerText = postData.body;
    const container = document.querySelector("#posts");
    container.innerHTML += `
    <div class="card d-flex justify-content-center">
        <div class="user-profile card-header">
           
            <div class="user-header-cont flex-grow-1">
                <a class="text-decoration-none text-reset fw-bold" href="profile.html?user=${name}"><h5>${name}</h5></a>
            </div>
        </div>
        <button class="btn follow-btn" id="${name}">Follow</button>
        <hr>
        <div class="card-body">
            <hr>
            <h5 class="card-title">${postData.title}</h5>
            <p class="card-text">${postData.body}</p> 
            <hr>
            <a href="#" class="btn btn-primary">Like</a>
        </div>
        <div class="card-footer text-muted d-flex align-items-center justify-content-around">
            <div class="vr align-items-center"></div>
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

    return post;
}


export function renderPostTemplate(postData, parent) {
    parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
} 