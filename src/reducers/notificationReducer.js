import { FETCH_NOTIFICATION_DATA, GET_NOTIFICATION_DATA } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATION_DATA :
      return {
        isFetching: true,
        result: state.result,
      };

    case GET_NOTIFICATION_DATA :
      return {
        isFetching: false,
        result: action.result,
      };

    default :
      return state;
  }
}
