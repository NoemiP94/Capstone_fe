import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const HandleBlog = () => {
  return (
    <Container className="my-4">
      <Row className="flex-column">
        <Col>
          <h3>Inserisci i dati per creare un nuovo articolo:</h3>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3 w-50">
              <Form.Label>Inserisci il titolo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il contenuto</Form.Label>
              <div>
                <textarea name="contenuto" cols="70" rows="15"></textarea>
              </div>
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Control type="file" />
              <Button>Inserisci immagine</Button>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default HandleBlog
// form creazione post + bottone upload immagini
// lista(get) di tutti i blogpost
// ogni post ha un pulsante per modificare(riempe di nuovo il form per la creazione)
// e un pulsante per eliminare
