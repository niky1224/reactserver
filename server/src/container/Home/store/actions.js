import axios from 'axios';
import * as actionsTypes from './actionTypes';
let valueList;
export const listLoadDate=()=>{
    axios.get('http://rap2api.taobao.org/app/mock/data/675973').then((res)=>{
        console.log(res);
        valueList=res.data;
        dispatch(listAcion);
    });
};

export const listAcion=({
    type:actionsTypes.DATA_LIST,
    valueList
});