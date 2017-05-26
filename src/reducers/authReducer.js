import { FETCH_LOGIN_DATA, GET_LOGIN_DATA, LOGOUT } from '../actions/types'

const initialState = {
  isFetching: false,
  result: null
}

export default function (state = initialState, action){
  switch (action.type) {
    case FETCH_LOGIN_DATA :
      return {
        isFetching: true,
        result: state.result
      }

    case GET_LOGIN_DATA :
      return {
        isFetching: false,
        result: action.result
      }

    case LOGOUT :
      return {
        isFetching: false,
        result: null
      }

    default:
      return state
  }

}
