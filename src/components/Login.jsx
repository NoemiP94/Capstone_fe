import { Button, Container, Form } from 'react-bootstrap'

const Login = () => {
  return (
    <Container className="w-25 my-5">
      <Form>
        <h4 className="my-4">Effettua l'accesso</h4>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </Container>
  )
}
export default Login
