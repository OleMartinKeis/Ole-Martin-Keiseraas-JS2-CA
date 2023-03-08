export class Profile {
    constructor({ 
      email,
      name,
      avatar = "",
      banner = "",
      posts = [],
      followers = [],
      following = []
    }) {
      this.email = email;
      this.name = name;
      this.avatar = avatar;
      this.banner = banner;
      this.posts = posts;
      this.followers = followers;
      this.following = following;
    }
}