import { POST_LOGIN, POST_REGISTER } from '../action'

const initialState = {
  token: '',
  role: '',
  content: null,
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
    default:
      return state
  }
}

export default loginReducer
