import { FETCH_REQUEST_DATA, GET_REQUEST_DATA, DELETE_REQUEST_DATA } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
  status: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST_DATA :
      return {
        isFetching: true,
        result: state.result,
        status: state.status,
      };

    case GET_REQUEST_DATA :
      return {
        isFetching: false,
        result: action.result,
        status: state.status,
      };

    case DELETE_REQUEST_DATA :
      return {
        isFetching: false,
        result: state.result,
        status: action.status,
      };

    default :
      return state;
  }
}
