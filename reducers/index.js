import {combineReducers} from 'redux';
import taskReducer from './task';

const allReducers = combineReducers({
  tasks: taskReducer,
});

export default allReducers;
