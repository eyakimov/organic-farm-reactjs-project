import { getUser } from "./auth-api";

async function request(method, url, data) {
    const options = {};
    const user = getUser();

    if (method !== 'GET') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data);
    }

    if (user) {
        if (user.email !== '') {
            options.headers = {
                ...(options.headers),
                'X-Authorization': user.accessToken
            }
        }
    }
    const response = await fetch(url, options);

    if (response.status === 204) {
        return;
    }

    return response.json();
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');

export default {
    get,
    post,
    put,
    del,
}