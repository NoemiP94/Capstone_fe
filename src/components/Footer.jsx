import { Col, Container, Row } from 'react-bootstrap'
import { Facebook, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="flex-column mb-3">
        <Col className="d-flex justify-content-center my-3">
          <a href="https://www.instagram.com/su_zurfuru_mine/">
            <Instagram className="mx-2" />
          </a>
          <a href="https://www.facebook.com/suzurfurumine/?locale=it_IT">
            <Facebook className="mx-2" />
          </a>
        </Col>
        <Col>
          <p className="text-center">
            Associazione Culturale Su Zurfuru Mine © {new Date().getFullYear()}{' '}
            - All rights reserved
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
