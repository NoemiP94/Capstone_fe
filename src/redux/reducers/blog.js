import {
  GET_BLOGPOST,
  GET_BLOG_DETAIL,
  GET_POST_IMAGE,
  POST_BLOGPOST,
} from '../action/blogs'

const initialState = {
  list: [],
  singlePost: null,
  postImage: null,
  content: null,
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
    case GET_POST_IMAGE:
      return {
        ...state,
        postImage: action.payload,
      }
    case POST_BLOGPOST:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

export default blogpostReducer
