// const defaultState = {
//   cash: 0,
// };

// export const cashReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'ADD_CASH':
//       return { ...state, cash: state.cash };
//   }
// };

const ALL_CASH = 'ALL_CASH';

const defaultState = {
  cash: 0,
};
export default function cashReducer(state = defaultState, action) {
  switch (action.type) {
    case ALL_CASH:
      return {
        ...state,
        cash: action.payload,
      };

    default:
      return state;
  }
}

export const endCash = (cash) => ({ type: ALL_CASH, payload: cash });
