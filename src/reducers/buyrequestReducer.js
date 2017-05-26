import { FETCH_BUY_REQUEST, SEND_BUY_REQUEST } from '../actions/types';

const initialState = {
  isFetching: false,
  result: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_BUY_REQUEST :
      return {
        isFetching: true,
        result: state.result,
      };

    case SEND_BUY_REQUEST :
      return {
        isFetching: false,
        result: action.result,
      };

    default :
      return state;
  }
}
