import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';


const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    // const id = 2;
    // const newArray = [...state.results];
    // newArray.splice(id, 1);
    const updatedArray = state.results.filter((element) => {
        return element.id !== action.resultElId;
    });
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /** State must remain immutable, so we can not use
         * array.push there, 'cause it is touching our state.
         * Instead we use array.concat, 'cause it returns
         * absolutely new array. IT IS IMPORTANT*/
        case actionTypes.STORE_RESULT:
            /** It is a wrong way, we can not do this!!! */
            // setTimeout(() => {
            //     return {
            //
            //     }
            // }, 3000);
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

    export default reducer;