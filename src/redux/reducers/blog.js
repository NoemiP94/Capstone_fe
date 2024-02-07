import { GET_BLOGPOST, GET_BLOG_DETAIL } from '../action/blogs'

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
    case GET_BLOG_DETAIL:
      return {
        ...state,
        singlePost: action.payload,
      }
    default:
      return state
  }
}

export default blogpostReducer
