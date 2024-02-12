export const POST_RESERVATION = 'POST_RESERVATION'
export const GET_RESERVATION = 'GET_RESERVATION'
export const GET_RESERVATION_DETAIL = 'GET_RESERVATION_DETAIL'

export const postReservation = (reservation) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/reservations/create', {
        method: 'POST',
        body: JSON.stringify(reservation),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_RESERVATION,
          payload: data,
        })
        alert(
          'Prenotazione salvata con successo! Presto ti contatteremo per confermare'
        )
      } else {
        throw new Error('Reservation failed!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const getReservation = (token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/reservations/getall', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data.content)
        dispatch({
          type: GET_RESERVATION,
          payload: data.content,
        })
        console.log('List of reservations has been loud correctly!')
      } else {
        throw new Error('List of reservations is fail')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const getReservationDetail = (id, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        'http://localhost:3001/reservations/detail/' + id,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: GET_RESERVATION_DETAIL,
          payload: data,
        })
        console.log('Detail has been load correctly')
      } else {
        throw new Error('Detail load is fail')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}
