import styles from './adminPanel.module.scss';
import Input from '../../utils/input/Input';
import { adminpanel } from '../../actions/item';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AdminPanel({ PersonalAreaClickOf }) {
  const [itemType, setItemType] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [cardName, setCardName] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();

  return (
    <div>
      <div className={styles.font}>
        <div className="font">
          <div className={styles.login}>
            <div className="login">
              <div className={styles.close}>
                <NavLink to="/">
                  <img onClick={PersonalAreaClickOf} src="./img/close.svg" alt="close" />
                </NavLink>
              </div>

              <h1>AdminPanel</h1>
              <div className="d-flex flex-column">
                <h4>itemType:</h4>
                <Input value={itemType} setValue={setItemType} type="text" placeholder="" />
                <h4>imageUrl:</h4>
                <Input
                  value={imageUrl}
                  setValue={setImageUrl}
                  type="text"
                  placeholder="name.format"
                />
                <h4>cardName:</h4>
                <Input value={cardName} setValue={setCardName} type="text" placeholder="" />

                <h4>price:</h4>
                <Input value={price} setValue={setPrice} type="text" placeholder="" />

                <h4>quantity</h4>
                <div className="d-flex">
                  <Input value={quantity} setValue={setQuantity} type="text" placeholder="" />
                </div>
              </div>
              <button
                className="AdminPanel"
                onClick={() => adminpanel(itemType, imageUrl, cardName, price, quantity)}>
                <h2>Add item to DataBase</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminPanel;
