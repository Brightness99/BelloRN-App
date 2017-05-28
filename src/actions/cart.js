import { FETCH_CART, GET_CART, ADD_TO_CART, DELETE_CART } from './types';
import * as env from './env';


const url = env.API_URL;
const header = env.API_HEADER;


export function fetchCart() {
  return {
    type: FETCH_CART,
  };
}


export function setAddToCartResponse({ status }) {
  return {
    type: ADD_TO_CART,
    status,
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
      dispatch(setAddToCartResponse({ status: responseData }));
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


export function setDeleteCartResponse({ status }) {
  return {
    type: DELETE_CART,
    status,
  };
}

export function deleteCart(data) {
  return (dispatch) => {
    dispatch(fetchCart());

    return fetch(`${url}product/deleteCart`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
        token: data.token,
        product_id: data.product_id,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setDeleteCartResponse({ status: responseData }));
      dispatch(getCart({ user_id: data.user_id, token: data.token }));
    })
    .done();
  };
}
