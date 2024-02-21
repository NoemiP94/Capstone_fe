export const POST_LOGIN = 'POST_LOGIN'
export const POST_REGISTER = 'POST_REGISTER'
export const GET_USERS = 'GET_USERS'
export const LOGOUT = 'LOGOUT'

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
        localStorage.setItem('isLogged', true)
        alert("Hai effettuato l'accesso correttamente!")
        return data
      } else {
        // localStorage.setItem('isLogged', false)
        throw new Error('Login is failed!')
      }
    } catch (error) {
      console.log('Error', error)
      alert('Errore durante il login! Controlla le credenziali e riprova.')
      throw error
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
      console.log('Error', error)
    }
  }
}

export const getUsers = (token, page) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:3001/users?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      if (res.ok) {
        const data = await res.json()
        dispatch({
          type: GET_USERS,
          payload: data,
        })
      } else {
        throw new Error('List of users is fail!')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('isLogged')
      dispatch({
        type: POST_LOGIN,
        payload: { token: '', role: '' },
      })
      alert('Hai effettuato il logout con successo!')
    } catch (error) {
      console.log('Error', error)
    }
  }
}
