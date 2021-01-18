import * as taskTypes from './../constants/task';

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case taskTypes.ADD_NEW_TASK: {
      return {
        ...state,
      };
    }
    case taskTypes.ADD_NEW_TASK_FAILED: {
      const {data} = action.payload;
      return {
        ...state,
        tasks: data,
      };
    }
    case taskTypes.ADD_NEW_TASK_SUCCESS: {
      return {
        ...state,
      };
    }
    case taskTypes.TOGGLE_ONE_TASK: {
      return {
        ...state,
      };
    }
    case taskTypes.TOGGLE_ONE_TASK_FAILED: {
      const {data} = action.payload;
      return {
        ...state,
        tasks: data,
      };
    }
    case taskTypes.TOGGLE_ONE_TASK_SUCCESS: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default taskReducer;
