import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {reducer as homereducer} from '../container/Home/store';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//为客户端增加devtool调试工具 在服务端并不支持window这中变量所以在服务端占时是写的单独的store 没有应用公用的文件
const reducer=combineReducers({
    home:homereducer
});



// const store=()=>createStore(reducer,composeEnhancers(
//     applyMiddleware(thunk)
// ));
export const serverstore=()=>createStore(reducer,applyMiddleware(thunk));
export const clientstore=()=>{
    const defaultState=window.context.state;
    return createStore(reducer,defaultState,applyMiddleware(thunk));
};
