import React from 'react';
import ReactDom from 'react-dom';
import Routers from '../routers';
import {BrowserRouter} from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
            {Routers}
        </BrowserRouter>
    )
};
ReactDom.hydrate(<App/>, document.getElementById('root'));