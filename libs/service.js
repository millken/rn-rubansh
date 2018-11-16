import http from './http';
import api from './api';

let getProducts = (params = {}) =>  http.get(api.getProducts, params);

let getProduct = (params = {}) =>  http.get(api.getProduct, params);

let getProductCustomOption = (params = {}) =>  http.get(api.getProductCustomOption, params);

export {getProducts, getProduct, getProductCustomOption};
