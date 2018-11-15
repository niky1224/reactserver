let express=require('express');
let app=new express();
let Home=require('./container/Home');
app.get('/',function (req,res) {
    res.send(
        `
        <h1>111111</h1>
        <Home></Home>
        `
    )
});
let server=app.listen(4000,function(){
    console.log('listen 4000');
});