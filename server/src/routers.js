import React from 'react';//使用jsx语法就要引入react

import Home from './container/Home';
import Login from './container/Login';
import thunk from "redux-thunk";
import {applyMiddleware, createStore,combineReducers} from "redux";

import {reducer as homereducer} from './container/Home/store';
const reducer=combineReducers({
    home:homereducer
});//进行多个reducer的合并


const getstore=()=>createStore(reducer,applyMiddleware(thunk));
//这里的服务器端的stroe 数据必须有那个路劲下
const store=getstore();
export default
 [
    {
        path: "/",
        component: Home,
        exact:true,
        loadData: () => Home.loadData(store),
        key:'home'
    },
     {
         path: "/login",
         component: Login,
         exact:true,
         key:'login'
     }
]

