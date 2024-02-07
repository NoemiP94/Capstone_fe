import { GET_BLOGPOST } from '../action/blogs'

const initialState = {
  list: [],
  singlePost: null,
}

const blogpostReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGPOST:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}

export default blogpostReducer
