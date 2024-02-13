export const POST_LOGIN = 'POST_LOGIN'
export const POST_REGISTER = 'POST_REGISTER'

export const postLogin = (login) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_LOGIN,
          payload: { token: data.token, role: data.role },
        })
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', data.role)
        alert("Hai effettuato l'accesso correttamente!")
      } else {
        throw new Error('Login is failed!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const postRegister = (register) => {
  return async (dispatch) => {
    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        body: JSON.stringify(register),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        dispatch({
          type: POST_REGISTER,
          payload: data,
        })
        alert('Registrazione effettuata con successo')
      } else {
        throw new Error('The register is fail')
      }
    } catch (error) {
      console.log(error)
    }
  }
}
