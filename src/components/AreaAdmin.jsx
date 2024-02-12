import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AreaAdmin = () => {
  return (
    <>
      <Container className="py-5">
        <Row>
          <h2>Benvenuto nell'Area Admin</h2>
          <p>Da qui potrai gestire le funzionalità dell'applicazione</p>
        </Row>
        <Row className="flex-column my-3">
          <p>Scegli una sezione:</p>
          <Col className="my-3">
            <Link to="/handleblog" className="text-light text-decoration-none">
              <Button className="w-25">Blog</Button>
            </Link>
          </Col>
          <Col className="my-3">
            <Link to="/handlevisit" className="text-light text-decoration-none">
              <Button className="w-25">Visite</Button>
            </Link>
          </Col>
          <Col className="my-3">
            <Link
              to="/handleReservation"
              className="text-light text-decoration-none"
            >
              <Button className="w-25">Prenotazioni</Button>
            </Link>
          </Col>
          <Col className="my-3">
            <Button className="w-25">Utenti</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AreaAdmin
