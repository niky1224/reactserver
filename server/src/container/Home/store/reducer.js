import * as actionsTypes from './actionTypes';

const initState = {
    arry: '11'
};
export default (state = initState, action) => {
    let newSate;
    switch (action.type) {
        case action.type === actionsTypes.DATA_LIST:
            newSate={...state,arry:action.valueList}
            break;
        default:
            return state;
    }
}

