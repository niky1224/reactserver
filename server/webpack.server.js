const path = require('path');
const external=require('webpack-node-externals');
const merge=require('webpack-merge');
const baseconfig=require('../server/webpack.base');
const serverconfig={
    mode:"development",//webpack 编译时需要制定 是那种模式
    target: "node",    //webpack编译node
    entry: {
        "index": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path:path.resolve(__dirname,'build')
    },
    externals:[external()],//webpack-node-externals 来编译是区分那些是node的
};

module.exports =merge(baseconfig,serverconfig);