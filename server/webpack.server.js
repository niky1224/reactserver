const path = require('path');
const external=require('webpack-node-externals');
module.exports = {
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
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['react','stage-0']//编译 react 一些新的语法
                }
            }
        ]
    }
};