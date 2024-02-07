import { Col, Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-bootstrap-icons'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar
      fluid
      expand="lg"
      className="navbar"
      bg="bg-black"
      data-bs-theme="dark"
    >
      <Container fluid className="w-100 align-items-center">
        <Link to="/">
          <Image
            src={logo}
            className="rounded-circle me-5"
            style={{ width: '70px' }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Storia</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#reservation">Prenotazioni</Nav.Link>
            <Nav.Link href="#info">Contatti</Nav.Link>

            <Col>
              <Nav.Link href="#area">Area admin</Nav.Link>
            </Col>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
