import { FETCH_ANALYTICS_DATA, GET_ANALYTICS_DATA, DELETE_ANALYTICS_SUBSCRIBE } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
  status: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ANALYTICS_DATA :
      return {
        isFetching: true,
        result: state.result,
        status: state.status,
      };

    case GET_ANALYTICS_DATA :
      return {
        isFetching: false,
        result: action.result,
        status: state.status,
      };

    case DELETE_ANALYTICS_SUBSCRIBE :
      return {
        isFetching: false,
        result: state.result,
        status: action.status,
      };

    default:
      return state;
  }
}
