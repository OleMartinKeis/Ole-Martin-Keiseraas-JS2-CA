
export function postTemplate(postData){
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerText = postData.title;

    if(postData.media) {
        const img = document.createElement('img');
        img.src = postData.media;
        img.alt = `Image from ${postData.title}`;
        post.append(img)
    }

    return post;
}


export function renderPostTemplate(postdata, parent) {

    parent.append(postTemplate(postdata));
}

export function renderPostTemplates(postDataList, parent) {
    parent.append(...postDataList.map(postTemplate));
}