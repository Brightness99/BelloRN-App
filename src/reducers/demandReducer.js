import { FETCH_DEMAND_DATA, GET_DEMAND_DATA, SUBSCRIBE_DEMAND } from '../actions/types';

const initialState = {
  isFetching: false,
  result: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DEMAND_DATA :
      return {
        isFetching: true,
        result: state.result,
      };

    case GET_DEMAND_DATA :
      return {
        isFetching: false,
        result: action.result,
      };

    case SUBSCRIBE_DEMAND :
      return {
        isFetching: false,
        result: [],
      };

    default:
      return state;
  }
}
