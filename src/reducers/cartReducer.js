import { FETCH_CART, GET_CART, ADD_TO_CART } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CART :
      return {
        isFetching: true,
        result: state.result,
      };

    case GET_CART :
      return {
        isFetching: false,
        result: action.result,
      };

    case ADD_TO_CART :
    default :
      return state;
  }
}
