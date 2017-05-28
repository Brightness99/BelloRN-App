import { FETCH_PRODUCT_RECOMMENDATION, GET_PRODUCT_RECOMMENDATION, FETCH_RECOMMENDATION_REMINDER, GET_RECOMMENDATION_REMINDER, RESET_REMINDER } from '../actions/types'

const initialState = {
  isFetching: false,
  result: [],
  keyword: '',
  isReminder: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT_RECOMMENDATION :
      return {
        isFetching: true,
        result: state.result,
        keyword: action.keyword,
        isReminder: state.isReminder,
      }

    case GET_PRODUCT_RECOMMENDATION :
      return {
        isFetching: false,
        result: action.result,
        keyword: action.keyword,
        isReminder: false,
      }

    case FETCH_RECOMMENDATION_REMINDER :
      return {
        isFetching: true,
        result: state.result,
        keyword: action.keyword,
        isReminder: true,
      };

    case GET_RECOMMENDATION_REMINDER :
      return {
        isFetching: false,
        result: action.result,
        keyword: action.keyword,
        isReminder: true,
      };

    case RESET_REMINDER :
      return {
        isFetching: false,
        result: state.result,
        keyword: state.keyword,
        isReminder: false,
      };

    default:
      return state
  }

}
