/**This class sends a message to renderPosts to display a message if something goes wrong with rendering of the posts in renderPosts.mjs
 * 
 */

export class AlertMessage {
    parser = new DOMParser();
  
    constructor(message, type) {
      this.message = message;
      this.type = type;
    }
  
    get template() {
      return `<div class="alert alert-${this.type} mb-0">${this.message}</div>`
    }
  
    parse(htmlString) {
      return this.parser.parseFromString(htmlString, "text/html");
    }
  
    render() {
      return this.parse(this.template).body.firstChild
    }
  }