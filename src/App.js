import React, { useEffect } from 'react';
import './App.css';
import Auth from './components/Auth';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/Notification';
import { showNotification } from './store/ui-slice';

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    const sendRequest = async () => {
      const res = await fetch(
        'https://react-redux-db-ac6cc-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      const data = await res.json();

      dispatch(
        showNotification({
          open: true,
          message: 'Request Sent Successfully!',
          type: 'success',
        })
      );
    };

    sendRequest().catch((err) => {
      dispatch(
        showNotification({
          open: true,
          message: 'Sending cart data failed!',
          type: 'error',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {loggedIn ? <Layout /> : <Auth />}
    </div>
  );
}

export default App;
