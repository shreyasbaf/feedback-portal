import {combineReducers} from 'redux'
import {feedbackReducer} from './Root/reducers'
import {userReducer} from './User/reducers'

const rootReducer = combineReducers({
  user: userReducer,
  feedback: feedbackReducer,
})

export default rootReducer
