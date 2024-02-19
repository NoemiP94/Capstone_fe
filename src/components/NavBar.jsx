import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'

const NavBar = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [role, setRole] = useState('')

  useEffect(() => {
    const logged = localStorage.getItem('isLogged') === 'true'
    setIsLogged(logged)
    console.log('isLogged:', isLogged)
    setRole(localStorage.getItem('role') || '')

    console.log('role:', role)
  }, [])

  return (
    <Navbar
      fluid
      expand="lg"
      className="golden-border position-sticky top-0 z-3 bg-black"
      data-bs-theme="dark"
    >
      <Container fluid className="w-100 align-items-center">
        <Link to="/">
          <Image
            src={logo}
            className="rounded-circle mx-3"
            style={{ width: '40px' }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-decoration-none">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/history" className="text-decoration-none">
                Storia
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog" className="text-decoration-none">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/reservation" className="text-decoration-none">
                Prenotazioni
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/info" className="text-decoration-none">
                Info
              </Link>
            </Nav.Link>

            {isLogged && role === 'ADMIN' && (
              <Fragment>
                <Nav.Link>
                  <Link to="/admin" className="text-decoration-none">
                    Area admin
                  </Link>
                </Nav.Link>
              </Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
