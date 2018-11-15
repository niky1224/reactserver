import express from 'express';
import React from 'react';
import ReactDOMServer  from 'react-dom/server';
import Home from './container/Home';
const homeString = ReactDOMServer.renderToString(<Home/>);
console.log(homeString);
let app = new express();
app.get('/', function (req, res) {
    res.send(
        `
                <html>
                    <head>
                        <title>ssr</title>
                    </head>
                    <body>
                        ${homeString}
                    </body>
                </html>
        `
    )
});
let server = app.listen(4000, function () {
    console.log('listen 4000');
});