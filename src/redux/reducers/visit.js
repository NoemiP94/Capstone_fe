import {
  DELETE_VISIT,
  GET_VISIT,
  POST_VISIT,
  PUT_VISIT,
} from '../action/visits'

const initialState = {
  list: [],
  content: null,
  update: '',
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
    case PUT_VISIT:
      return {
        ...state,
        update: action.payload,
      }
    case DELETE_VISIT:
      return {
        ...state,
        list: state.list.filter((visit) => visit.id !== action.payload),
      }
    default:
      return state
  }
}

export default visitReducer
