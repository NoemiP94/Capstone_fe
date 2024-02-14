import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../redux/action'
import { useEffect, useState } from 'react'

const AreaAdmin = () => {
  const dispatch = useDispatch()
  const [logOut, setLogOut] = useState(false)
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    setLogOut(true)
  }

  useEffect(() => {
    if (logOut) {
      navigate('/login')
    }
  }, [logOut, navigate])
  return (
    <>
      <Container className="py-5 vh-100">
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
              to="/handlereservation"
              className="text-light text-decoration-none"
            >
              <Button className="w-25">Prenotazioni</Button>
            </Link>
          </Col>
          <Col className="my-3">
            <Link to="/user" className="text-light text-decoration-none">
              <Button className="w-25">Utenti</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Button
            onClick={handleLogout}
            className="my-2"
            style={{ width: '150px' }}
          >
            Log out
          </Button>
        </Row>
      </Container>
    </>
  )
}

export default AreaAdmin
