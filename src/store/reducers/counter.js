import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /** One of the ways to return the immutable state */
        // case 'INCREMENT':
        // const newState = Object.assign({}, state);
        // newState.counter = state.counter + 1;
        // return newState;
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val});
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.val});
        default:
            return state;
    }

};

export default reducer;
