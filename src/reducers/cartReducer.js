import { FETCH_CART, GET_CART, ADD_TO_CART, DELETE_CART } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
  status: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_CART :
      return {
        isFetching: true,
        result: state.result,
        status: state.status,
      };

    case GET_CART :
      return {
        isFetching: false,
        result: action.result,
        status: state.status,
      };

    case DELETE_CART :
    case ADD_TO_CART :
      return {
        isFetching: false,
        result: state.result,
        status: action.result,
      };

    default :
      return state;
  }
}
