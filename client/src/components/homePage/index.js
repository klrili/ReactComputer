import React from 'react';
import Card from '../card';
import SlideButton from '../slideButton.js';
import Cart from '../cart';
import Header from '../header';
import MobileHeader from '../mobileHeader';
import Login from '../login';
import Registration from '../register';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from '../../actions/user';
import { items } from '../../actions/item';

const HomePage = () => {
  const [onClickCart, onClickCartSet] = React.useState(false);
  const [onClickPersonalArea, onClickPersonalAreaSet] = React.useState(false);
  const [onClickRegister, onClickRegisterSet] = React.useState(false);
  const AllItem = useSelector((state) => state.item.items);
  const email = useSelector((state) => state.user.currentUser.email);
  const dispatch = useDispatch();
  console.log(email + 'email');
  console.log(AllItem);
  useEffect(() => {
    dispatch(auth());
  }, []);
  useEffect(() => {
    dispatch(items());
  }, []);
  return (
    <div>
      {onClickPersonalArea && (
        <Login
          PersonalAreaClickOf={() => onClickPersonalAreaSet(!onClickPersonalArea)}
          register={() => {
            onClickRegisterSet(!onClickRegister);
            onClickPersonalAreaSet(!onClickPersonalArea);
          }}
        />
      )}
      {onClickRegister && (
        <Registration
          PersonalAreaClickOf={() => onClickRegisterSet(!onClickRegister)}
          register={() => {
            onClickRegisterSet(!onClickRegister);
            onClickPersonalAreaSet(!onClickPersonalArea);
          }}
        />
      )}

      <Header
        onCart={() => onClickCartSet(!onClickCart)}
        onClick={() => onClickCartSet(false)}
        PersonalAreaClickOn={() => {
          onClickPersonalAreaSet(!onClickPersonalArea);
          onClickCartSet(false);
        }}
      />
      <MobileHeader />
      {onClickCart && <Cart />}

      <body>
        <div className="novelty">
          <div className="slidesButtons d-flex align-center ">
            <SlideButton />
            <SlideButton />
            <SlideButton />
            <SlideButton />
            <SlideButton />
          </div>
          <a className="slides d-flex">
            <img src="./img/Slide1.png" alt="slides" />
          </a>
        </div>
        <div className="preWrapper">
          <h1>Возможно, вас заинтересует</h1>
        </div>
        <div className="wrapper d-flex  ">
          <div className="cards d-flex flex-wrap justify-center">
            {AllItem.map((obj) => (
              <Card id={obj._id} imageUrl={obj.imageUrl} cardName={obj.cardName} />
            ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default HomePage;
