import { FETCH_PRODUCT_RECOMMENDATION, GET_PRODUCT_RECOMMENDATION } from '../actions/types'

const initialState = {
  isFetching: false,
  result: []
}

export default function (state = initialState, action){
  switch (action.type) {
    case FETCH_PRODUCT_RECOMMENDATION :
      return {
        isFetching: true,
        result: state.result
      }

    case GET_PRODUCT_RECOMMENDATION :
      return {
        isFetching: false,
        result: action.result
      }

    default:
      return state
  }

}
