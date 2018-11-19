import React from 'react';
import ReactDom from 'react-dom';
import Routers from '../routers';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store';



const App = () => {
    return (
        <Provider store={store()}>
            <BrowserRouter>
                {Routers}
            </BrowserRouter>
        </Provider>
    )
};
ReactDom.hydrate(<App/>, document.getElementById('root'));