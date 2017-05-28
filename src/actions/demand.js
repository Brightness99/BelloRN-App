import { FETCH_DEMAND_DATA, GET_DEMAND_DATA, SUBSCRIBE_DEMAND } from './types';
import * as env from './env';


const url = env.API_URL;
const header = env.API_HEADER;


export function fetchDemandData() {
  return {
    type: FETCH_DEMAND_DATA,
  };
}


export function setDemandResponse({ result }) {
  return {
    type: GET_DEMAND_DATA,
    result,
  };
}

export function getDemandData() {
  return (dispatch) => {
    dispatch(fetchDemandData());

    return fetch(`${url}buyrequest/trends`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setDemandResponse({ result: responseData }));
    })
    .done();
  };
}


export function setSubscribeDemandResponse({ status }) {
  return {
    type: SUBSCRIBE_DEMAND,
    status,
  };
}

export function subscribeDemand(data) {
  return (dispatch) => {
    dispatch(fetchDemandData());

    return fetch(`${url}userbuyrequest`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
        keyword: data.keyword,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      dispatch(setSubscribeDemandResponse({ status: responseData }));
    })
    .done();
  };
}
