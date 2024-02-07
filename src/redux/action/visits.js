export const GET_VISIT = 'GET_VISIT'

export const getVisit = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/visits/getall')
      if (res.ok) {
        const data = await res.json()
        console.log(data.content)
        dispatch({
          type: GET_VISIT,
          payload: data.content,
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
