import * as actionsTypes from './actionTypes';

const initState = {
    arry: []
};
export default (state = initState, action) => {
    debugger;

    let newSate;
    switch (action.type) {
        case actionsTypes.DATA_LIST:
             newSate={...state ,arry:action.valueList.arry};
            return newSate;
            break;
        default:
            return state;
    }
}

