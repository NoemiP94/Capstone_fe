import { Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../assets/logo.png'

const Open = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Image
          src={logo}
          style={{ height: '500px', width: '450px' }}
          className="fade-in"
        />
      </Row>
      <Row className="flex-column text-center">
        <Col>
          <h2 className="fade-in ">Museo della Memoria Mineraria</h2>
          <h3 className="fade-in ">Su Zurfuru</h3>
        </Col>
        <Col>
          <h4 className="fade-in">Un viaggio nel NOSTRO passato</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Open
