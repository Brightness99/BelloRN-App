import { combineReducers } from 'redux';

import sceneReducer from './sceneReducer';
import userdataReducer from './userdataReducer';
import authReducer from './authReducer';
import recommendationReducer from './recommendationReducer';
import buyrequestReducer from './buyrequestReducer';
import cartReducer from './cartReducer';
import demandReducer from './demandReducer';

export default combineReducers({
  scene: sceneReducer,
  userdata: userdataReducer,
  auth: authReducer,
  recommendation: recommendationReducer,
  buyrequest: buyrequestReducer,
  cart: cartReducer,
  demand: demandReducer,
});
