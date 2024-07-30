import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../store/cart-slice';
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  function handleShowCart() {
    dispatch(showCart());
  }

  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
