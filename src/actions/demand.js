import { FETCH_DEMAND_DATA, GET_DEMAND_DATA, SUBSCRIBE_DEMAND } from './types';
import * as env from './env';


const url = env.API_URL;


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
