import React, { useState } from 'react';
import styles from './cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Component } from 'react';
import { cartItems, items } from '../../actions/item';
import CartItem from './cartItem';

function Cart() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  console.log(cash);
  const AllICartItem = useSelector((state) => state.item.cartItems);
  const AllItem = useSelector((state) => state.item.items);
  console.log(AllICartItem.quantity);
  console.log(AllItem);

  useEffect(() => {
    dispatch(items());
  }, []);
  useEffect(() => {
    dispatch(cartItems());
  }, []);

  return (
    <div className={styles.cart}>
      <div className="cart d-flex flex-column ">
        {AllICartItem.map((CartObj) =>
          AllItem.map((obj) =>
            obj._id == CartObj.itemId ? (
              <CartItem
                id={obj._id}
                quantity={CartObj.quantity}
                imageUrl={obj.imageUrl}
                cardName={obj.cardName}
                price={obj.price}
              />
            ) : null,
          ),
        )}

        <div className={styles.cartEnd}>
          <div className="cartEnd">
            <h2>Итого: {''} грн.</h2>
            <button>
              <h3>ОФОРМИТЬ ЗАКАЗ</h3>
              <img src="../img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
