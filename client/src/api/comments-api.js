import * as api from './api.js';
import * as request from './requester';

export const getAll = (productId) => request.get(`${api.COMMENTS}?where=productId%3D%22${productId}%22&sortBy=_createdOn%20desc`);

export const create = (commentData) => request.post(api.COMMENTS, commentData);
