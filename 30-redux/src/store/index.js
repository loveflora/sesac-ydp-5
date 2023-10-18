import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

// combineReducers : 여러 개의 reducer을 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer, // counter : { number: 50 }
  isVisible: isVisibleReducer,
});

export default rootReducer;
