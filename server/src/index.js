import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routers from './routers';//路由统一管理
let app = new express();
app.use(express.static('public'));
app.get('*', function (req, res) {
    // 在服务器端使用路由用StaticRouter 还必须要有 location context其中context用来数据注水以便浏览器端再次渲染时获取数据
    const homeString = ReactDOMServer.renderToString((
        <StaticRouter location={req.path} context={{}}>
            {Routers}
        </StaticRouter>
    ));
    res.send(
        `
                <html>
                    <head>
                        <title>ssr</title>
                    </head>
                    <body>
                        <div id="root">${homeString}</div>
                        <script src="/index.js"></script>
                    </body>
                </html>
        `
    )
});
let server = app.listen(4000, function () {
    console.log('listen 4000');
});