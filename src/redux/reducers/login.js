import { GET_USERS, LOGOUT, POST_LOGIN, POST_REGISTER } from '../action'

const initialState = {
  token: '',
  role: '',
  content: null,
  list: [],
  isLoading: true,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      }
    case POST_REGISTER:
      return {
        ...state,
        content: action.payload,
      }
    case GET_USERS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}

export default loginReducer
