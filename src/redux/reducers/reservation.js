import { GET_RESERVATION, POST_RESERVATION } from '../action/reservations'

const initialState = {
  content: null,
  list: [],
}

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESERVATION:
      return {
        ...state,
        content: action.payload,
      }
    case GET_RESERVATION:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state
  }
}
export default reservationReducer
