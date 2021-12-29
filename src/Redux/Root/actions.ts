import axios from 'axios'
import {baseURL} from '../Store'
import {
  FEEDBACK_POST_FAIL,
  FEEDBACK_POST_REQUEST,
  FEEDBACK_POST_SUCCESS,
  GET_FEEDBACKS_FAIL,
  GET_FEEDBACKS_REQUEST,
  GET_FEEDBACKS_SUCCESS,
} from './constants'

export const postFeedback =
  (data: any) => async (dispatch: any, getState: any) => {
    try {
      dispatch({
        type: FEEDBACK_POST_REQUEST,
      })
      await axios.post(`${baseURL}/add-feedbacks`, data)
      dispatch({
        type: FEEDBACK_POST_SUCCESS,
        payload: 'success',
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
    const response = await axios.get(`${baseURL}/all-feedbacks`)
    dispatch({
      type: GET_FEEDBACKS_SUCCESS,
      payload: response.data,
    })
  } catch (error: any) {
    dispatch({
      type: GET_FEEDBACKS_FAIL,
      payload: error?.message,
    })
  }
}
