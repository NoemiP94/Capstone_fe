export const POST_RESERVATION = 'POST_RESERVATION'

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
