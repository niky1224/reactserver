module.exports={
    module:{
        rules:[
            {
                test:/\.js?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['react','stage-0']//编译 react 一些新的语法
                }
            }
        ]
    }
};