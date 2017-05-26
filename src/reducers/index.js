import { combineReducers } from 'redux';

import sceneReducer from './sceneReducer';
import userdataReducer from './userdataReducer';
import authReducer from './authReducer';
import recommendationReducer from './recommendationReducer';
import buyrequestReducer from './buyrequestReducer';

export default combineReducers({
  scene: sceneReducer,
  userdata: userdataReducer,
  auth: authReducer,
  recommendation: recommendationReducer,
  buyrequest: buyrequestReducer,
});
