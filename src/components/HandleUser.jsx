import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postRegister } from '../redux/action'

const HandleUser = () => {
  const [register, setRegister] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  return (
    <Container className="my-4">
      <Row className="my-3">
        <h3>Inserisci un nuovo amministratore</h3>
      </Row>
      <Row>
        <Col sm={6} className="glass p-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci nome"
                onChange={(e) => {
                  setRegister({
                    ...register,
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci cognome"
                onChange={(e) => {
                  setRegister({
                    ...register,
                    surname: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci email"
                onChange={(e) => {
                  setRegister({
                    ...register,
                    email: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci password"
                onChange={(e) => {
                  setRegister({
                    ...register,
                    password: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                dispatch(postRegister(register))
              }}
            >
              Salva
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default HandleUser
