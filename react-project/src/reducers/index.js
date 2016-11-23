/**
 * Created by Excalibur on 16/10/24.
 */

import {combineReducers} from 'redux'


const data = (state = {}, action) => {

    state = Object.assign({}, state);
    switch (action.type){
        case "hehe":
            state = Object.assign({}, action.data);
            break;
        default:
            ;
    }
    return state;
};


export default combineReducers({data})