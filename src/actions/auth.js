import { FETCH_LOGIN_DATA, GET_LOGIN_DATA, LOGOUT } from './types'
import * as env from './env'


const url = env.API_URL
const header = env.API_HEADER

export function fetchLoginData() {
  return {
    type: FETCH_LOGIN_DATA
  }
}

export function submitLogin(username, password) {
  return (dispatch, getState) => {
    dispatch(fetchLoginData())

    return fetch(url + 'user/login', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: header
    })
    .then((response) => response.json())
    .then((responseData) => {
      dispatch(setLoginResponse({ result: responseData}))
    })
    .done()
  }
}

export function setLoginResponse({ result }) {
  return {
    type: GET_LOGIN_DATA,
    result
  }
}


export function logout() {
  return {
    type: LOGOUT
  }
}
