import { useEffect, useState } from 'react'
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReservation, getReservation } from '../redux/action/reservations'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { Trash3Fill } from 'react-bootstrap-icons'

const HandleReservation = () => {
  const reservationData = useSelector((state) => state.reservation.list)
  const token = localStorage.getItem('token')
  const [currentPage, setCurrentPage] = useState(0)
  const dispatch = useDispatch()
  const spinner = useSelector((state) => state.reservation.isLoading)

  useEffect(() => {
    dispatch(getReservation(token, currentPage))
  }, [dispatch, currentPage])

  const handleDelete = async (reservation) => {
    try {
      await dispatch(deleteReservation(reservation.id, token))
      dispatch(getReservation(token, currentPage))
      console.log('Eliminato con successo')
    } catch (error) {
      console.log('Error', error)
    }
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <Container className="vh-100">
      <Row className="my-3">
        <h3>Lista delle prenotazioni:</h3>
        {spinner && (
          <Col className="d-flex justify-content-center my-5">
            <div className="colorful"></div>
          </Col>
        )}
      </Row>
      {reservationData.content &&
        reservationData.content.map((reservation) => {
          const visitDate = reservation.visit_id
            ? reservation.visit_id.date
            : null
          return (
            <Row
              key={reservation.id}
              sm={12}
              md={5}
              lg={3}
              className="border rounded glass my-3 p-2 flex-nowrap justify-content-md-between
          align-items-lg-center"
            >
              <Col sm={3} lg={3}>
                Nome: {reservation.name}
              </Col>
              <Col sm={3} lg={3}>
                Cognome: {reservation.surname}
              </Col>
              <Col sm={3} lg={3}>
                Prenotato per:{' '}
                {visitDate
                  ? format(new Date(visitDate), 'dd/MM/yyyy HH:mm')
                  : 'Non trovato!'}
              </Col>
              <Col sm={3} lg={3}>
                <Link
                  to={`/handlereservation/${reservation.id}`}
                  className="text-light text-decoration-none"
                >
                  <Button className="m-2" style={{ width: '100px' }}>
                    Dettagli
                  </Button>
                </Link>
                <Trash3Fill
                  className="text-danger mx-2"
                  onClick={() => {
                    handleDelete(reservation)
                  }}
                />
              </Col>
            </Row>
          )
        })}
      {reservationData && (
        <Pagination className="justify-content-center custom-page">
          {[...Array(reservationData.totalPages).keys()].map((number) => (
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

export default HandleReservation
