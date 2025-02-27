import { replaceData } from './cart-slice';
import { showNotification } from './ui-slice';

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        'https://react-redux-db-ac6cc-default-rtdb.firebaseio.com/cartItems.json'
      );

      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchHandler();
      // console.log(cartData);
      dispatch(replaceData(cartData));
    } catch (err) {
      dispatch(
        showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        open: true,
        message: 'Sending Request To Database!',
        type: 'warning',
      })
    );

    const sendRequest = async () => {
      // Send state as Sending request
      const res = await fetch(
        'https://react-redux-db-ac6cc-default-rtdb.firebaseio.com/cartItems.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      const data = await res.json();
      // Send state as Request is successful
      dispatch(
        showNotification({
          open: true,
          message: 'Request Sent Successfully!!',
          type: 'success',
        })
      );
    };

    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        })
      );
    }
  };
};
