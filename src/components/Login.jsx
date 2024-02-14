import { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postLogin } from '../redux/action'
import { Link } from 'react-router-dom'

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()

  useEffect(() => {
    setLogin({
      ...login,
    })
  }, [])
  return (
    <Container className="w-25 my-5 vh-100">
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

        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            dispatch(postLogin(login))
          }}
        >
          <Link to="/admin" className="text-light text-decoration-none">
            Invia
          </Link>
        </Button>
      </Form>
    </Container>
  )
}
export default Login
