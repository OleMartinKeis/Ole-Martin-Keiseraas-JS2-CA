import { deletePost } from "../handlers/deletePost.mjs";

/**
 * This class is the template for all posts with all the object info for the post
 */

export class PostThumbnail {
    parser = new DOMParser();
  

  
    get template() {
        


        return `
        <div class="card d-flex align-items-center justify-content-center mb-5" style="margin-top: 75px; padding: 15px;">
        <div class="user-profile card-header">
            <div class="user-header-cont flex-grow-1">
                <a class="text-decoration-none text-reset fw-bold" href="profile.html?user=${this.author.name}"><h5>${this.author.name}</h5></a>
            </div>
        </div>
        <div class="d-flex align-items-center justify-content-space-between"
        <button class="btn follow-btn" data-id="${this.id}">Follow</button>
        <button class="btn delete-btn" data-id="${this.id}">Delete Post</button>
        </div>
        <hr>
        <div class="card-body">
            <img class="img-fluid" src="${this.media}"img-alt="This is the alt text"/>
            <hr>
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.body}</p> 
            <hr>
            <a href="#" class="btn btn-primary">Like</a>
        </div>
        <div class="card-footer text-muted d-flex align-items-center justify-content-around">
        </div>
    </div>
    `;
    }

    
  
    constructor({ id, title, body, tags, created, updated, media = "placeholder", author = author.name, comments = [], reactions = [] }) {
      this.id = id;
      this.title = title;
      this.body = body;
      this.tags = tags;
      this.media = media;
      this.author = author;
      this.comments = comments;
      this.reactions = reactions;
      this.created = created;
      this.updated = updated;
    }
    
    parse(htmlString) {
      return this.parser.parseFromString(htmlString, "text/html");
    }
  
    render() {
      return this.parse(this.template).body.firstChild
    }
  }
