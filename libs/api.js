const prefix = 'https://wx.rubansh.com/api'; // api地址前缀
export default(config => {
    return Object.keys(config).reduce((copy, name) => {
        copy[name] = prefix + config[name];
        return copy;
    }, {});
})({
    // example api
    'getProducts': '/h5v2/getProducts', 
});

/*
// api对象
{
  getExampleData: '/api/example/data'
}
*/