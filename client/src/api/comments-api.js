import * as api from './api.js';
import * as request from './requester';

export const getAll = (productId) => {
    const params = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `author=_ownerId:users`,
    })
    
    return request.get(`${api.COMMENTS}?${params.toString()}`);
};
export const create = (commentData) => request.post(api.COMMENTS, commentData);

export default {
    getAll,
    create,
    removeComments,
}
