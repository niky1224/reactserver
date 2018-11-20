import React from 'react';
import ReactDom from 'react-dom';
import Routers from '../routers';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {clientstore} from '../store';


const store=clientstore();
debugger;
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>{Routers.map(route => (
                    <Route key={route.key} {...route} />
                ))}</div>
            </BrowserRouter>
        </Provider>
    )
};
ReactDom.hydrate(<App/>, document.getElementById('root'));