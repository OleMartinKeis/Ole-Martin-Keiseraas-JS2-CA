import { load } from "../api/storage/index.mjs"

<<<<<<< HEAD
=======
/** heades() loads the accestoken and sends it 
 * 
 * fetchwithtoken allows to call the api address with the loaded token
 * 
 * @returns 
 */
>>>>>>> js2

export function headers() {
    const token = load("token");
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
}

export async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
<<<<<<< HEAD
        headers: headers()
    })
=======
        headers: headers(),
    });
>>>>>>> js2


}