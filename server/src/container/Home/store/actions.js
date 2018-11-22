import axios from 'axios';
import * as actionsTypes from './actionTypes';
export const listLoadDate=(dispatch,getstate)=>{
    debugger;
    return (dispatch)=>{
        return axios.get('/app/mock/data/675973').then((res)=>{
            dispatch(listAcion(res.data));
        });
    }
};

export const serverlistLoadDate=(dispatch,getstate)=>{
    debugger;
    return (dispatch)=>{
        return axios.get('http://rap2api.taobao.org/app/mock/data/675973').then((res)=>{
            return res.data;
        });
    }
};

export const listAcion=(valueList)=>({
    type:actionsTypes.DATA_LIST,
    valueList
});
