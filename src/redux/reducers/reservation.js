import { POST_RESERVATION } from '../action/reservations'

const initialState = {
  content: null,
}

const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESERVATION:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}
export default reservationReducer
