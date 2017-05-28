import { SAVE_USERDATA, REMOVE_USERDATA, UPDATE_USER_ONESIGNALID } from './types';
import * as env from './env';

const url = env.API_URL;
const header = env.API_HEADER;

export function saveUserdata(data) {
  return {
    type: SAVE_USERDATA,
    result: data,
  };
}

export function removeUserdata() {
  return {
    type: REMOVE_USERDATA,
    result: null,
  };
}

export function updateUserOneSignalId(data) {
  return (dispatch) => {
    return fetch(`${url}user/updateCustom`, {
      method: 'POST',
      body: JSON.stringify({
        user_id: data.user_id,
        onesignal_id: data.onesignal_id,
      }),
      headers: header,
    })
    .then(response => response.json())
    .then((responseData) => {
      // do nothing...
      console.log(responseData);
    })
    .done();
  };
}
