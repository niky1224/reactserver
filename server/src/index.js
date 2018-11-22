import express from 'express';
import proxy from 'express-http-proxy';
import {render} from "./utils";
//http://rap2api.taobao.org/app/mock/data/675973

let app = new express();
app.use('/app/mock',proxy('http://rap2api.taobao.org',{
    proxyReqPathResolver:function(req){
        return req.uri;
    }
}));
app.use(express.static('public'));
app.get('*', function (req, res) {
    render(req,res);
});
let server = app.listen(4000, function () {
    console.log('listen 4000');
});