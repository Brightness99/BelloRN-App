import { FETCH_BUY_REQUEST, SEND_BUY_REQUEST } from './types';
import * as env from './env';


const url = env.API_URL;
const header = env.API_HEADER;

export function fetchBuyRequest() {
  return {
    type: FETCH_BUY_REQUEST,
  };
}

export function setBuyRequestResponse({ result }) {
  return {
    type: SEND_BUY_REQUEST,
    result,
  };
}

export function sendBuyRequest(data) {
  return (dispatch) => {
    dispatch(fetchBuyRequest());

    return fetch(`${url}buyrequest`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
        keyword: data.keyword,
        is_purchase: data.is_purchase,
        reminder_schedule: data.reminder_schedule,
        is_cancel: data.is_cancel,
        cancelation_reason: data.cancelation_reason,
        is_delete: data.is_delete
      }),
      headers: header,
    })
    .then((response) => { response.json(); })
    .then((responseData) => {
      dispatch(setBuyRequestResponse({ result: responseData }));
    })
    .done();
  };
}
