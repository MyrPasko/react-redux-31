const initialState = {
        counter: 0,
        results: []
    }
;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        /** One of the ways to return the immutable state */
        // case 'INCREMENT':
        // const newState = Object.assign({}, state);
        // newState.counter = state.counter + 1;
        // return newState;
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            };
            /** State must remain immutable, so we can not use
             * array.push there, 'cause it is touching our state.
             * Instead we use array.concat, 'cause it returns
             * absolutely new array. IT IS IMPORTANT*/
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            };
        default:
            return state;
    }

    // if (action.type === 'INCREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }
    // if (action.type === 'DECREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD') {
    //     return {
    //         ...state,
    //         counter: state.counter + action.val
    //     }
    // }
    // if (action.type === 'SUBTRACT') {
    //     return {
    //         ...state,
    //         counter: state.counter - action.val
    //     }
    // }
    // return state;
};

export default reducer;