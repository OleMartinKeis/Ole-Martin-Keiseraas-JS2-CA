import { login } from "./api/auth/login.mjs";
import { getPosts } from "./api/posts/read.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import router from "./router.mjs"



router();


console.log()