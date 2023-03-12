import { load } from "../api/storage/index.mjs"

/** heades() loads the accestoken and sends it 
 * 
 * fetchwithtoken allows to call the api address with the loaded token
 * 
 * @returns 
 */

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
        headers: headers(),
    });


}