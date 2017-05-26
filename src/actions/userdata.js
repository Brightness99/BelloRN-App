import { SAVE_USERDATA, REMOVE_USERDATA } from './types'

export function saveUserdata(data) {
  return {
    type: SAVE_USERDATA,
    result: data
  }
}

export function removeUserdata() {
  return {
    type: REMOVE_USERDATA,
    result: null
  }
}
