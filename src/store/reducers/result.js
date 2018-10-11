import * as actionTypes from '../actions';


const initialState = {
        results: []
    };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /** State must remain immutable, so we can not use
         * array.push there, 'cause it is touching our state.
         * Instead we use array.concat, 'cause it returns
         * absolutely new array. IT IS IMPORTANT*/
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter((element) => {
                return element.id !== action.resultElId;
            });
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
};

export default reducer;