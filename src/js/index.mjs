import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

setRegisterFormListener();

setLoginFormListener();

const path = location.pathname;

if (path === '/profile/log/') {
    setLoginFormListener();
} else if (path === '/profile/register/') {
    setRegisterFormListener();
}