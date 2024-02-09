import { GET_VISIT, POST_VISIT } from '../action/visits'

const initialState = {
  list: [],
  content: null,
}

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VISIT:
      return {
        ...state,
        list: action.payload,
      }
    case POST_VISIT:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default visitReducer
