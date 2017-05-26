import { SAVE_USERDATA, REMOVE_USERDATA } from '../actions/types'

const initialState = {
  result: null
}

export default function (state = initialState, action){
  switch (action.type) {
    case SAVE_USERDATA:
      return {
        result: action.result
      }

    case REMOVE_USERDATA:
      return {
        result: null
      }

    default:
      return state;
  }
}
