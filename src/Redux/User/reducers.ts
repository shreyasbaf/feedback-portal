import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  LOGOUT,
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
  loginSuccess: sessionStorage.getItem("loginSuccess")||'',
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
        loginSuccess:''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginSuccess: action.payload,
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
        signupSuccess: action.payload,
        signupLoading: false,
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        signupLoading: false,
        signupFail: action.payload,
      }
    
    case LOGOUT:
      return{
        ...state,
        loginSuccess: '',
      }

    default:
      return state
  }
}
