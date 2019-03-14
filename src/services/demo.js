import { get, post, patch, del } from '../utils/req.js';

const base = '/test';

export const list = () => get(`${base}`);

export const detail = id => get(`${base}/${id}`);

export const add = data => post(`${base}`, data);

export const update = (id, data) => patch(`${base}/${id}`, data);

export const disable = id => del(`${base}/${id}`);
