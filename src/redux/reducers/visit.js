import { GET_VISIT } from '../action/visits'

const initialState = {
  list: [],
}

const visitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VISIT:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default visitReducer
