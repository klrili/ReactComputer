const ALL_ITEMS = 'ALL_ITEMS';
const ALL_CARTITEMS = 'ALL_CARTITEMS';

const defaultState = {
  items: [],
  cartItems: [],
};
export default function itemReducer(state = defaultState, action) {
  switch (action.type) {
    case ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ALL_CARTITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    default:
      return state;
  }
}

export const allItems = (item) => ({ type: ALL_ITEMS, payload: item });
export const allCartItems = (cartitem) => ({ type: ALL_CARTITEMS, payload: cartitem });
