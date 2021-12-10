import React, { useState, useEffect } from 'react';
import styles from './cartItem.module.scss';
import { cardquantity } from '../../../actions/item';
import { useDispatch } from 'react-redux';
const CartItem = (props, { cartEndPrice }) => {
  let itemPrice = props.price;
  const itemId = props.id;

  const [itemValue, itemValueSet] = React.useState(props.quantity);
  const [endPrice, endPriceSet] = React.useState(itemPrice);
  useEffect(() => {
    const quantity = itemValue;
    cardquantity(itemId, quantity);
  });

  // {
  //   const dispatch = useDispatch();

  //   dispatch({ type: 'ALL_CASH', payload: endPrice });
  // }

  const Value = (e) => {
    console.log('e.target.value=' + e.target.value);
    if (e.target.value < 1) itemValueSet(1);
    else itemValueSet(e.target.value);
    if (e.target.value > 0) endPriceSet(e.target.value * itemPrice);
    else endPriceSet(itemPrice);
  };
  const volumeRemove = () => {
    if (itemValue > 1) {
      itemValueSet(Number(itemValue) - 1);
      endPriceSet((Number(itemValue) - 1) * itemPrice);
    }
  };

  const volumeAdd = () => {
    {
      itemValueSet(Number(itemValue) + 1);
      endPriceSet((Number(itemValue) + 1) * itemPrice);
    }
  };

  return (
    <div className={styles.cartItem}>
      <div className="cartItem">
        <div className={styles.cartImage}>
          <img className="cartImage" src={props.imageUrl} alt="cartItem" />
        </div>

        <h3>{props.cardName}</h3>
        <div className={styles.volume}>
          <div className="volume d-flex align-center">
            <button onClick={volumeRemove}>
              <img src="../img/volumeRemove.svg" alt="volumeRemove" />
            </button>
            <div className={styles.inputButton}>
              <div className="inputButton d-flex justify-around">
                <input onChange={(e) => Value(e)} value={itemValue} name="itemsValue" type="text" />
              </div>
            </div>
            <button onClick={volumeAdd}>
              <img src="../img/volumeAdd.svg" alt="volumeAdd" />
            </button>
          </div>
        </div>
        <div className={styles.price}>
          <div className="price">
            <h2>{props.price * itemValue} grn.</h2>
          </div>
        </div>
        <div className={styles.remove}>
          <img className="remove" src="../img/itemRemove.svg" alt="itemRemove" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
