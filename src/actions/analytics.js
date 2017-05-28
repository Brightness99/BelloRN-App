import { FETCH_ANALYTICS_DATA, GET_ANALYTICS_DATA, DELETE_ANALYTICS_SUBSCRIBE } from './types'
import * as env from './env'


const url = env.API_URL
const header = env.API_HEADER

export function fetchAnalyticsData() {
  return {
    type: FETCH_ANALYTICS_DATA,
  };
}


export function setAnalyticsResponse({ result }) {
  return {
    type: GET_ANALYTICS_DATA,
    result,
  };
}

export function getAnalyticsData(data) {
  return (dispatch) => {
    dispatch(fetchAnalyticsData());

    return fetch(`${url}user/keywords/subscribe`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setAnalyticsResponse({ result: responseData }));
    })
    .done();
  }
}


export function setDeleteSubscribeResponse({ status }) {
  return {
    type: DELETE_ANALYTICS_SUBSCRIBE,
    status,
  };
}

export function deleteSubscribe(id, data, user) {
  return (dispatch) => {
    return fetch(`${url}userbuyrequest/${id}`, {
      method: 'POST',
      body: data,
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setDeleteSubscribeResponse({ status: responseData }));
      dispatch(getAnalyticsData({ user_id: user }));
    })
    .done();
  };
}
