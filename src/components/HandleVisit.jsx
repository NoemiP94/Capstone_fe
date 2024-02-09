import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getVisit, postVisit } from '../redux/action/visits'
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons'
import { format } from 'date-fns'

const HandleVisit = () => {
  const [visit, setVisit] = useState({
    description: '',
    date: '',
    maxPeople: '',
  })

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const visitData = useSelector((state) => state.visit.list)
  useEffect(() => {
    dispatch(getVisit())
  }, [dispatch])

  const handleDate = (e) => {
    const selected = new Date(e.target.value)
    if (!isNaN(selected)) {
      const formatted = selected.toISOString().slice(0, 16)
      setVisit({
        ...visit,
        date: formatted,
      })
    } else {
      console.log('Non valido!')
    }
  }
  return (
    <Container className="my-4">
      <Row className="flex-column">
        <Col>
          <h3>Inserisci i dati per creare una nuova visita:</h3>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3 w-50">
              <Form.Label>
                Inserisci una breve descrizione della visita
              </Form.Label>
              <Form.Control
                type="text"
                // value={blogpost.title}
                onChange={(e) => {
                  setVisit({
                    ...visit,
                    description: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci data e ora</Form.Label>
              <FormControl
                type="datetime-local"
                className="w-25"
                onChange={handleDate}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Inserisci il numero massimo di posti disponibili
              </Form.Label>
              <FormControl
                type="number"
                className="w-25"
                onChange={(e) => {
                  setVisit({
                    ...visit,
                    maxPeople: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                dispatch(postVisit(visit, token)).then(dispatch(getVisit()))
              }}
            >
              Salva
            </Button>
            {/* <Button
              className="ms-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleUpdate()
              }}
            >
              Modifica
            </Button> */}
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <h4 className="mb-3">Lista delle visite:</h4>
        {visitData &&
          visitData.map((visit) => (
            <Col key={visit.id} sm={12} md={5} lg={3} className="mb-2">
              <Card className="glass p-2">
                <p className="text-light my-2">
                  Descrizione: {visit.description}
                </p>

                <p>
                  Data e ora: {format(new Date(visit.date), 'dd/MM/yyyy HH:mm')}
                </p>
                <p>Posti disponibili: {visit.maxPeople}</p>

                <div className="d-flex my-2">
                  <PencilFill
                    className="text-warning mx-2"
                    // onClick={() => {
                    //   handlePencilUpdate(blog)
                    // }}
                  />
                  <Trash3Fill
                    className="text-danger mx-2"
                    // onClick={() => {
                    //   handleDelete(blog)
                    // }}
                  />
                </div>
              </Card>
            </Col>
          ))}
      </Row>
      <Row className="my-4">
        <Button style={{ width: '100px' }} className="ms-2">
          <Link to="/admin" className="text-light text-decoration-none">
            Indietro
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

export default HandleVisit
