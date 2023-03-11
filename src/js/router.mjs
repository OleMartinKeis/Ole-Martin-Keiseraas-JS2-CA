import { login } from "./api/auth/login.mjs";
import * as handlers from "./handlers/index.mjs"
import { getProfile } from "./api/profile/read.mjs";


const path = location.pathname;

// export default function router() {
//     switch(path) {
//         case "/profile/login/":
//             handlers.setLoginFormListener();
//             return;
//         case "/profile/register/":
//             handlers.setRegisterFormListener();
//             return;
//         case "/post/create/":
//             handlers.setCreatePostListener();
//             return;
//         case "/post/edit/":
//             handlers.setUpdatePostListener();
//             return;
//         case "/profile/edit/":
//             handlers.setUpdateProfileListener();
//             return;

//     }
// }



