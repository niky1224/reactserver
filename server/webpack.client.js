const path = require('path');
const merge=require('webpack-merge');
const baseconfig=require('../server/webpack.base');
const clientconfig={
    mode:"development",//webpack 编译时需要制定 是那种模式
    entry: {
        "index": "./src/client/index.js"
    },
    output: {
        filename: "[name].js",
        path:path.resolve(__dirname,'public')
    },
};


module.exports =merge(baseconfig,clientconfig);