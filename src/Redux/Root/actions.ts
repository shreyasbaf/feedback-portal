import {
  FEEDBACK_POST_FAIL,
  FEEDBACK_POST_REQUEST,
  FEEDBACK_POST_SUCCESS,
  GET_FEEDBACKS_FAIL,
  GET_FEEDBACKS_REQUEST,
  GET_FEEDBACKS_SUCCESS,
} from './constants'

export const postFeedback = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: FEEDBACK_POST_REQUEST,
    })
    dispatch({
      type: FEEDBACK_POST_SUCCESS,
    })
  } catch (error: any) {
    dispatch({
      type: FEEDBACK_POST_FAIL,
      payload: error?.message,
    })
  }
}

export const getAllFeedbacks = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: GET_FEEDBACKS_REQUEST,
    })
    dispatch({
      type: GET_FEEDBACKS_SUCCESS,
    })
  } catch (error: any) {
    dispatch({
      type: GET_FEEDBACKS_FAIL,
      payload: error?.message,
    })
  }
}
