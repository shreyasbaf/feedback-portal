import {
  FEEDBACK_POST_FAIL,
  FEEDBACK_POST_REQUEST,
  FEEDBACK_POST_SUCCESS,
  GET_FEEDBACKS_FAIL,
  GET_FEEDBACKS_REQUEST,
  GET_FEEDBACKS_SUCCESS,
} from './constants'

interface initialStateTypes {
  feedbackPostLoading: boolean
  feedbackPostSuccess: string
  feedbackPostFail: string
  feedbacksLoading: boolean
  allFeedbacks: {}[]
  feedbacksFail: string
}

const initialState: initialStateTypes = {
  feedbackPostLoading: false,
  feedbackPostSuccess: '',
  feedbackPostFail: '',
  feedbacksLoading: false,
  allFeedbacks: [],
  feedbacksFail: '',
}

export const feedbackReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FEEDBACK_POST_REQUEST:
      return {
        ...state,
        feedbackPostLoading: true,
        feedbackPostFail: '',
      }
    case FEEDBACK_POST_SUCCESS:
      return {
        ...state,
        feedbackPostLoading: false,
        feedbackPostSuccess: action.payload,
      }
    case FEEDBACK_POST_FAIL:
      return {
        ...state,
        feedbackPostLoading: false,
        feedbackPostFail: action.payload,
      }
    case GET_FEEDBACKS_REQUEST:
      return {
        ...state,
        feedbacksLoading: true,
        feedbacksFail: '',
      }
    case GET_FEEDBACKS_SUCCESS:
      return {
        ...state,
        feedbacksLoading: false,
        allFeedbacks: action.payload,
      }
    case GET_FEEDBACKS_FAIL:
      return {
        ...state,
        feedbacksLoading: false,
        feedbacksFail: action.payload,
      }

    default:
      return state
  }
}
