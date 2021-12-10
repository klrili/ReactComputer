import axios from 'axios';
import { allItems, allCartItems } from '../reducers/itemReducer';

export const adminpanel = async (itemType, imageUrl, cardName, price, quantity) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/adminpanel`, {
      itemType,
      imageUrl,
      cardName,
      price,
      quantity,
    });
    alert(response.data.message);
  } catch (e) {
    alert('e.response.data.message');
  }
};

export const items = () => {
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`http://localhost:5000/api/auth/items`)
        .then((response) => response);

      dispatch(allItems(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const card = async (itemId, quantity) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/card`, {
      itemId,
      quantity,
    });
    alert(response.data.message);
  } catch (e) {
    alert('e.response.data.message');
  }
};

export const cardquantity = async (itemId, quantity) => {
  try {
    console.log('cardquantity actions');

    const response = await axios.post(`http://localhost:5000/api/auth/cardquantity`, {
      itemId,
      quantity,
    });
    // alert(response.data.message);
  } catch (e) {
    alert('e.response.data.message');
  }
};

export const cartItems = () => {
  return async (dispatch) => {
    try {
      const response = await axios
        .get(`http://localhost:5000/api/auth/cartItems`)
        .then((response) => response);

      dispatch(allCartItems(response.data));
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};
