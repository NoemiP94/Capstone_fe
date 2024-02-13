import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const HandleUser = () => {
  return (
    <Container>
      <Row>
        <h3>Inserisci un nuovo amministratore</h3>
      </Row>
      <Row>
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Inserisci nome" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control type="text" placeholder="Inserisci cognome" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Inserisci email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Inserisci password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Salva
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default HandleUser
