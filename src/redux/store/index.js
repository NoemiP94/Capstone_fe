import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogpostReducer from '../reducers/blog'

const bigReducer = combineReducers({
  blogpost: blogpostReducer,
})

const store = configureStore({
  reducer: bigReducer,
})

export default store
