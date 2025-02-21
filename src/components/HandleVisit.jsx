import { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Pagination,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  deleteVisit,
  getVisit,
  postVisit,
  updateVisit,
} from '../redux/action/visits'
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
  const [currentPage, setCurrentPage] = useState(0)
  useEffect(() => {
    dispatch(getVisit(currentPage))
  }, [dispatch, currentPage])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const spinner = useSelector((state) => state.visit.isLoading)

  const handleDate = (e) => {
    const selected = new Date(e.target.value)
    if (!isNaN(selected)) {
      const localDate = new Date(
        selected.getTime() - selected.getTimezoneOffset() * 60000
      )
      const formatted = localDate.toISOString().slice(0, 16)
      setVisit({
        ...visit,
        date: formatted,
      })
    } else {
      console.log('Non valido!')
    }
  }

  const [updatedVisit, setUpdatedVisit] = useState(null)
  const [idVisit, setIdVisit] = useState('')

  const handlePencilUpdate = (visit) => {
    setUpdatedVisit(visit)
    setIdVisit(visit.id)
    setVisit({
      description: visit.description,
      date: visit.date,
      maxPeople: visit.maxPeople,
    })
  }

  const handleUpdate = async () => {
    try {
      await dispatch(updateVisit(idVisit, visit, token))
      dispatch(getVisit(currentPage))
      console.log('Modificato con successo!')
    } catch (error) {
      console.log("Errore nell'aggiornamento", error)
    }
  }

  const handleDelete = async (visit) => {
    try {
      await dispatch(deleteVisit(visit.id, token))
      dispatch(getVisit(currentPage))
      console.log('Eliminato con successo')
    } catch (error) {
      console.log("Errore nell'eliminazione", error)
    }
  }

  return (
    <Container className="my-4 h-100">
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
                value={visit.description}
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
                value={visit.date}
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
                value={visit.maxPeople}
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
                dispatch(postVisit(visit, token)).then(
                  dispatch(getVisit(currentPage))
                )
              }}
            >
              Crea
            </Button>
            <Button
              className="ms-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleUpdate()
              }}
            >
              Salva modifiche
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <h4 className="mb-3 text-center">Lista delle visite:</h4>
        {spinner && (
          <Col className="d-flex justify-content-center my-5">
            <div className="colorful"></div>
          </Col>
        )}
        {visitData.content &&
          visitData.content.map((visit) => (
            <Col
              key={visit.id}
              sm={12}
              md={5}
              lg={3}
              className="m-2 glass w-50"
            >
              <div className=" p-2">
                <p className="text-light my-2">
                  Descrizione: {visit.description}
                </p>

                <p>
                  Data e ora: {format(new Date(visit.date), 'dd/MM/yyyy HH:mm')}
                </p>
                <p>Posti disponibili: {visit.maxPeople}</p>
              </div>

              <div className="d-flex my-3">
                <PencilFill
                  className="text-warning mx-2"
                  onClick={() => {
                    handlePencilUpdate(visit)
                  }}
                />
                <Trash3Fill
                  className="text-danger mx-2"
                  onClick={() => {
                    handleDelete(visit)
                  }}
                />
              </div>
            </Col>
          ))}
      </Row>
      {visitData && (
        <Pagination className="justify-content-center custom-page">
          {[...Array(visitData.totalPages).keys()].map((number) => (
            <Pagination.Item
              key={number}
              active={number === currentPage - 1}
              onClick={() => handlePageChange(number)}
              className="custom-item"
            >
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
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
