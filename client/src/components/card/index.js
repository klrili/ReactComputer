import styles from './card.module.scss';
import { card } from '../../actions/item';
import React from 'react';
function Card(props) {
  const itemId = props.id;
  const quantity = 1;

  return (
    <div className={styles.card}>
      <div className="d-flex flex-column">
        <img src={props.imageUrl} alt="product img" />
        <h3>{props.cardName}</h3>
        <button onClick={() => card(itemId, quantity)}>
          <h3>Добавить в корзину</h3>
        </button>
      </div>
    </div>
  );
}
export default Card;
