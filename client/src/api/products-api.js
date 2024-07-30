import * as api from './api.js';
import * as request from './requester';

export const getAll = () => request.get(`${api.PRODUCTS}?sortBy=_createdOn%20desc`);

export const getOne = (id) => request.get(`${api.PRODUCTS}/${id}`);

export const getMy = (ownerId) => request.get(`${api.PRODUCTS}?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);

export const create = (productData) => request.post(api.PRODUCTS, productData);

export const update = (productData, id) => request.put(`${api.PRODUCTS}/${id}`, productData);

export const del = (id) => request.del(`${api.PRODUCTS}/${id}`);