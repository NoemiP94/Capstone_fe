import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postLogin } from '../redux/action'

import { Navigate } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const [redirectAdmin, setRedirectAdmin] = useState(false)

  //gestione login
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await dispatch(postLogin(login))
      console.log('Login response:', response)
      if (response.token) {
        setRedirectAdmin(true)
      } else {
        alert('Credenziali errate!')
      }
    } catch (error) {
      console.error('Errore durante il login:', error)
      alert('errore durante il login!')
    }
  }
  //se le credenziali sono giuste va ad /admin
  if (redirectAdmin) {
    return <Navigate to="/admin" replace />
  }
  return (
    <Container className="w-25 mt-5 vh-100">
      <Form className="border rounded glass p-4">
        <h4 className="my-4">Effettua l'accesso</h4>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@example.com"
            onChange={(e) => {
              setLogin({
                ...login,
                email: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            onChange={(e) => {
              setLogin({
                ...login,
                password: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Button type="submit" onClick={handleLogin}>
          Invia
        </Button>
      </Form>
    </Container>
  )
}
export default Login
