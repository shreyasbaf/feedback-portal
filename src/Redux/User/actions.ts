import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
} from './constants'
import {baseURL} from '../Store'
import axios from 'axios'

export const userLogin = (data:any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })
    await axios.post(`${baseURL}/userlogin`, data)
    .then((response) => {
      console.log(response.data);
      if(response.data.login === 'success'){
        dispatch({
          type: LOGIN_SUCCESS,
          payload:response.data
        })}
        else{
          dispatch({
            type: LOGIN_FAIL,
            payload: 'error',
          })
        }
      })
  }
 catch (error: any) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error?.message,
    })
  }
}

export const userSignUP = (data: any) => async (dispatch: any, getState: any) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    })
    await axios.post(`${baseURL}/add-user`, data)
    .then((response) => {
      console.log(response);
  })
    dispatch({
      type: SIGNUP_SUCCESS,
      payload:'success'
    })
  } catch (error: any) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error?.message,
    })
  }
}

export const userLogout = () => async (dispatch: any, getState: any) => {
    dispatch({
      type: LOGOUT
    })
  } 