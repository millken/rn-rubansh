import http from './http';
import api from './api';

let getProducts = function(params = {}){
    console.log(api.getProducts)
    return http.get(api.getProducts, params);
};

let a = false;

export {getProducts, a};
