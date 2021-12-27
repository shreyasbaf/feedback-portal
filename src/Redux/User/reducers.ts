import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from './constants'

interface initialStateTypes {
  loginLoading: boolean
  loginSuccess: string
  loginFail: string
  signupLoading: boolean
  signupSuccess: string
  signupFail: string
}

const initialState: initialStateTypes = {
  loginLoading: false,
  loginSuccess: '',
  loginFail: '',
  signupLoading: false,
  signupSuccess: '',
  signupFail: '',
}
export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        loginFail: '',
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        loginLoading: false,
        loginFail: action.payload,
      }
    case SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        signupFail: '',
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signupLoading: false,
        signupFail: action.payload,
      }

    default:
      return state
  }
}
