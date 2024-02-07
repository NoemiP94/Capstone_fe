import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogpostReducer from '../reducers/blog'
import visitReducer from '../reducers/visit'
import reservationReducer from '../reducers/reservation'

const bigReducer = combineReducers({
  blogpost: blogpostReducer,
  visit: visitReducer,
  reservation: reservationReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
