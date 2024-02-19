import { Col, Container, Row } from 'react-bootstrap'

const NotFound = () => {
  return (
    <Container fluid>
      <Row className="full-height mt-5 pt-5">
        <Col xs={12}>
          <div className="contenuto">
            <h2>Pagina non trovata</h2>
            <Row className="flex-column">
              <p>Non abbiamo trovato la pagina che stai cercando. </p>
              <p>Prova a tornare alla Home</p>
              <p className="mt-4">
                {' '}
                <div id="bb" onClick={() => window.location.assign('/')}>
                  <p>Home</p>
                </div>
              </p>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound
