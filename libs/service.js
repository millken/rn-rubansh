import http from './http';
import api from './api';

let getProducts = function(params = {}){
    console.log(api.getProducts)
    return http.get(api.getProducts, params);
};

let getProduct = (params = {}) =>  http.get(api.getProduct, params);


export {getProducts, getProduct};
