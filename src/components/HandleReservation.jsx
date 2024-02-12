import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getReservation } from '../redux/action/reservations'
import { format } from 'date-fns'

const HandleReservation = () => {
  const reservationData = useSelector((state) => state.reservation.list)
  const visitData = useSelector((state) => state.visit.list)
  const token = localStorage.getItem('token')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReservation(token))
  }, [dispatch])

  return (
    <Container>
      <Row className="my-3">
        <h3>Lista delle prenotazioni:</h3>
      </Row>
      {reservationData &&
        reservationData.map((reservation) => {
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
                <Button
                  className="m-2"
                  style={{ width: '100px' }}
                  //   onClick={() => handleShow(reservation.id)}
                  //   disabled={show && selected !== reservation.id}
                >
                  Dettagli
                </Button>
              </Col>
            </Row>
          )
        })}
    </Container>
  )
}

export default HandleReservation
