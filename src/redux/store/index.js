import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogpostReducer from '../reducers/blog'
import visitReducer from '../reducers/visit'

const bigReducer = combineReducers({
  blogpost: blogpostReducer,
  visit: visitReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
