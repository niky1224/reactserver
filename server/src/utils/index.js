import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, Route} from 'react-router-dom';
import {matchRoutes} from "react-router-config";//服务端匹配多级路由
import Routers from '../routers';//路由统一管理
import {Provider} from 'react-redux';
import {serverstore as getstore} from '../store'

import * as homeActions from '../container/Home/store/actions';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as homereducer} from '../container/Home/store';

const reducer = combineReducers({
    home: homereducer
});//进行多个reducer的合并

export const render = (req, res) => {
    //const getstore=()=>createStore(reducer,applyMiddleware(thunk));
//这里的服务器端的stroe 数据必须有那个路劲下
    const store = getstore();
    const promises = [];
    const matchedRoutes = matchRoutes(Routers, req.path);
    matchedRoutes.map((item) => {//利用路由增加的方法
        if (item.route.loadData) {
            console.log(111);
            promises.push(item.route.loadData());
        }
    });

    // 在服务器端使用路由用StaticRouter 还必须要有 location context其中context用来数据注水以便浏览器端再次渲染时获取数据
    Promise.all(promises).then((data) => {
        console.log(data,222222222);
        if(data.length){
            const data1 = data[0];
            store.dispatch(homeActions.listAcion(data1));//取回到数据在去存到redux中
        }


        const stroeTxt=store.getState();
        const homeString = ReactDOMServer.renderToString((
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>
                        {Routers.map(route => (
                            <Route key={route.key} {...route} />
                        ))}
                    </div>

                </StaticRouter>
            </Provider>
        ));
        res.send(
            `
                <html>
                    <head>
                        <title>ssr</title>
                    </head>
                    <body>
                        <div id="root">${homeString}</div>
                        <script>
                            window.context={
                                state:${JSON.stringify(stroeTxt)}
                            }
                        </script>
                        <script src="/index.js"></script>
                    </body>
                </html>
        `
        )
    });
};