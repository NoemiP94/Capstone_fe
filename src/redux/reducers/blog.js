import {
  DELETE_BLOGPOST,
  GET_BLOGPOST,
  GET_BLOG_DETAIL,
  GET_POST_IMAGE,
  POST_BLOGPOST,
  PUT_BLOGPOST,
} from '../action/blogs'

const initialState = {
  list: [],
  singlePost: null,
  postImage: null,
  content: null,
  update: '',
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
    case PUT_BLOGPOST:
      return {
        ...state,
        update: action.payload,
      }
    case DELETE_BLOGPOST:
      return {
        ...state,
        list: state.list.filter((post) => post.id !== action.payload),
      }
    default:
      return state
  }
}

export default blogpostReducer
