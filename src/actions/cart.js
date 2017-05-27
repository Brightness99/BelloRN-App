import { FETCH_CART, GET_CART, ADD_TO_CART } from './types';
import * as env from './env';


const url = env.API_URL;
const header = env.API_HEADER;


export function fetchCart() {
  return {
    type: FETCH_CART,
  };
}


export function setAddToCartResponse({ result }) {
  return {
    type: ADD_TO_CART,
    result,
  };
}

export function addToCart(data) {
  return (dispatch) => {
    dispatch(fetchCart());

    return fetch(`${url}product/addCart`, {
      method: 'POST',
      body: JSON.stringify({
        product_id: data.product_id,
        quantity: data.quantity,
        user_id: data.user_id,
        token: data.token,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setAddToCartResponse({ result: responseData }));
    })
    .done();
  };
}


export function setGetCartResponse({ result }) {
  return {
    type: GET_CART,
    result,
  };
}

export function getCart(data) {
  return (dispatch) => {
    dispatch(fetchCart());

    return fetch(`${url}product/viewCart`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
        token: data.token,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setGetCartResponse({ result: responseData }));
    })
    .done();
  };
}
