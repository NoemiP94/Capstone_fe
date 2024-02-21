export const GET_VISIT = 'GET_VISIT'
export const POST_VISIT = 'POST_VISIT'
export const PUT_VISIT = 'PUT_VISIT'
export const DELETE_VISIT = 'DELETE_VISIT'

export const getVisit = (page) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `http://localhost:3001/visits/getall?page=${page}`
      )
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_VISIT,
          payload: data,
        })
        console.log('List of visits has been loud correctly! ')
      } else {
        throw new Error('List of visits is fail')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const postVisit = (visit, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/visits/create', {
        method: 'POST',
        body: JSON.stringify(visit),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_VISIT,
          payload: data,
        })
        alert('Visita creata con successo!')
      } else {
        throw new Error('Visit creation is failed!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const updateVisit = (id, updateVisit, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/visits/' + id, {
        method: 'PUT',
        body: JSON.stringify(updateVisit),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data.content)
        dispatch({
          type: PUT_VISIT,
          payload: data.content,
        })
        alert('Visita modificata con successo!')
      } else {
        throw new Error('Error while updating the visit')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const deleteVisit = (id, token) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/visits/' + id, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.ok) {
        dispatch({
          type: DELETE_VISIT,
          payload: id,
        })
      } else {
        throw new Error('Error in deleting the visit!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}
