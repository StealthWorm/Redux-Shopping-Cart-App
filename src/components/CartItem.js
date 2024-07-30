import React from 'react';
import { useDispatch } from 'react-redux';
import './Cart.css';
import { addItemToCart } from './../store/cart-slice';
import { removeItemFromCart } from '../store/cart-slice';
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeItemFromCart(id));
  };

  const addHandler = () => {
    dispatch(
      addItemToCart({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
