import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
