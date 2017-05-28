import { FETCH_REQUEST_DATA, GET_REQUEST_DATA, DELETE_REQUEST_DATA } from './types';
import * as env from './env';


const url = env.API_URL;
const header = env.API_HEADER;


export function fetchRequestData() {
  return {
    type: FETCH_REQUEST_DATA,
  };
}


export function setRequestResponse({ result }) {
  return {
    type: GET_REQUEST_DATA,
    result,
  };
}

export function getRequestData(data) {
  return (dispatch) => {
    dispatch(fetchRequestData());

    return fetch(`${url}buyrequest/reminder`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setRequestResponse({ result: responseData }));
    })
    .done();
  };
}


export function setDeleteResponse({ status }) {
  return {
    type: DELETE_REQUEST_DATA,
    status,
  };
}

export function deleteRequestData(id, userId) {
  return (dispatch) => {
    dispatch(fetchRequestData());

    return fetch(`${url}buyrequest/delete/${id}`, {
      method: 'POST',
      body: JSON.stringify({
        id,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setDeleteResponse({ status: responseData }))
      dispatch(getRequestData({ user_id: userId }));
    })
    .done();
  };
}
