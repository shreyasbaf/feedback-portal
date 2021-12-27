import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from './constants'

export const userLogin = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })
    dispatch({
      type: LOGIN_SUCCESS,
    })
  } catch (error: any) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.message,
    })
  }
}

export const userSignUP = () => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    })
    dispatch({
      type: SIGNUP_SUCCESS,
    })
  } catch (error: any) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error?.message,
    })
  }
}
