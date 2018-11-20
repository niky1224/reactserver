import express from 'express';

import {render} from "./utils";

let app = new express();
app.use(express.static('public'));
app.get('*', function (req, res) {
    render(req,res);


});
let server = app.listen(4000, function () {
    console.log('listen 4000');
});