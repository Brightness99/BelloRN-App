import { FETCH_DEMAND_DATA, GET_DEMAND_DATA, SUBSCRIBE_DEMAND } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
  status: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DEMAND_DATA :
      return {
        isFetching: true,
        result: state.result,
        status: state.status,
      };

    case GET_DEMAND_DATA :
      return {
        isFetching: false,
        result: action.result,
        status: state.status,
      };

    case SUBSCRIBE_DEMAND :
      return {
        isFetching: false,
        result: state.result,
        status: action.status,
      };

    default:
      return state;
  }
}
