import { FETCH_NOTIFICATION_DATA, GET_NOTIFICATION_DATA } from './types';
import * as env from './env';


const url = env.API_URL;
const header = env.API_HEADER;


export function fetchNotificationData() {
  return {
    type: FETCH_NOTIFICATION_DATA,
  };
}


export function setNotificationResponse({ result }) {
  return {
    type: GET_NOTIFICATION_DATA,
    result,
  };
}

export function getNotificationData(data) {
  return (dispatch) => {
    dispatch(fetchNotificationData());

    return fetch(`${url}buyrequest/notification`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setNotificationResponse({ result: responseData }));
    })
    .done();
  };
}
