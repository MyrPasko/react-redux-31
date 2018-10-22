
/** It doesn't exist no longer */


// import * as actionTypes from './actions';
//
//
// const initialState = {
//         counter: 0,
//         results: []
//     }
// ;
//
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         /** One of the ways to return the immutable state */
//         // case 'INCREMENT':
//         // const newState = Object.assign({}, state);
//         // newState.counter = state.counter + 1;
//         // return newState;
//         case actionTypes.INCREMENT:
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             };
//         case actionTypes.DECREMENT:
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             };
//         case actionTypes.ADD:
//             return {
//                 ...state,
//                 counter: state.counter + action.val
//             };
//         case actionTypes.SUBTRACT:
//             return {
//                 ...state,
//                 counter: state.counter - action.val
//             };
//             /** State must remain immutable, so we can not use
//              * array.push there, 'cause it is touching our state.
//              * Instead we use array.concat, 'cause it returns
//              * absolutely new array. IT IS IMPORTANT*/
//         case actionTypes.STORE_RESULT:
//             return {
//                 ...state,
//                 results: state.results.concat({id: new Date(), value: state.counter})
//             };
//         case actionTypes.DELETE_RESULT:
//             // const id = 2;
//             // const newArray = [...state.results];
//             // newArray.splice(id, 1);
//             const updatedArray = state.results.filter((element) => {
//                 return element.id !== action.resultElId;
//             });
//             return {
//                 ...state,
//                 results: updatedArray
//             };
//         default:
//             return state;
//     }
//
//     // if (action.type === 'INCREMENT') {
//     //     return {
//     //         ...state,
//     //         counter: state.counter + 1
//     //     }
//     // }
//     // if (action.type === 'DECREMENT') {
//     //     return {
//     //         ...state,
//     //         counter: state.counter - 1
//     //     }
//     // }
//     // if (action.type === 'ADD') {
//     //     return {
//     //         ...state,
//     //         counter: state.counter + action.val
//     //     }
//     // }
//     // if (action.type === 'SUBTRACT') {
//     //     return {
//     //         ...state,
//     //         counter: state.counter - action.val
//     //     }
//     // }
//     // return state;
// };
//
// export default reducer;