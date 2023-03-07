export class PostThumbnail {
    parser = new DOMParser();
  
    get lastTouched() {
      return (new Date(this.updated)).toLocaleDateString("en-GB")
    }
  
    get excerpt() {
      if (this.body && this.body.length > 50) {
        return this.body ? this.body.substr(0, 50) : "";
      }
      return this.body;
    }
  
    get template() {
 
      return `
      <div class="card d-flex justify-content-center">
      <div class="user-profile card-header">
          <div class="user-header-cont flex-grow-1">
              <a class="text-decoration-none text-reset fw-bold" href="profile.html?user=${this.author.name}"><h5>${this.author.name}</h5></a>
          </div>
      </div>
      <button class="btn follow-btn" id="${this.name}">Follow</button>
      <hr>
      <div class="card-body">
        <img class="img-fluid" src="${this.media}"></>
          <hr>
          <h5 class="card-title">${this.title}</h5>
          <p class="card-text">${this.body}</p> 
          <hr>
          <a href="#" class="btn btn-primary">Like</a>
      </div>
      <div class="card-footer text-muted d-flex align-items-center justify-content-around">
          <div class="vr align-items-center"></div>
      </div>
  </div>
  `
  
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