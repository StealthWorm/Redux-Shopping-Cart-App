import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return <div className="App">{loggedIn ? <Layout /> : <Auth />}</div>;
}

export default App;
