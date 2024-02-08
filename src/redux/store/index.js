import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogpostReducer from '../reducers/blog'
import visitReducer from '../reducers/visit'
import reservationReducer from '../reducers/reservation'
import loginReducer from '../reducers/login'

const bigReducer = combineReducers({
  blogpost: blogpostReducer,
  visit: visitReducer,
  reservation: reservationReducer,
  login: loginReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
