import {
  GET_RESERVATION,
  GET_RESERVATION_DETAIL,
  POST_RESERVATION,
} from '../action/reservations'

const initialState = {
  content: null,
  list: [],
  singleReservation: null,
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
    case GET_RESERVATION_DETAIL:
      return {
        ...state,
        singleReservation: action.payload,
      }
    default:
      return state
  }
}
export default reservationReducer
