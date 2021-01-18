import * as taskTypes from './../constants/task';

export const addNewTask = (params = {}) => ({
  type: taskTypes.ADD_NEW_TASK,
  payload: {
    params,
  },
});

export const addNewTaskSuccess = (data) => ({
  type: taskTypes.ADD_NEW_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addNewTaskFaild = (error) => ({
  type: taskTypes.ADD_NEW_TASK_FAILED,
  payload: {
    error,
  },
});

export const toggleOneTask = (params = {}) => ({
  type: taskTypes.ADD_NEW_TASK,
  payload: {
    params,
  },
});

export const toggleOneTaskSuccess = (data) => ({
  type: taskTypes.ADD_NEW_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const toggleOneTaskFaild = (error) => ({
  type: taskTypes.ADD_NEW_TASK_FAILED,
  payload: {
    error,
  },
});
