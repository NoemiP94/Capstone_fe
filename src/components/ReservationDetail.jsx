import { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getReservationDetail } from '../redux/action/reservations'
import { format } from 'date-fns'
import { PencilFill } from 'react-bootstrap-icons'
import UpdateReservationModal from './UpdateReservationModal'

const ReservationDetail = () => {
  const { id } = useParams()
  const singleReservation = useSelector(
    (state) => state.reservation.singleReservation
  )
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    dispatch(getReservationDetail(id, token))
  }, [dispatch, id])

  const [showModal, setShowModal] = useState(false)

  const handlePencilUpdate = () => {
    setShowModal(true)
  }

  return (
    <Container className="my-4 vh-100">
      <Row>
        <h3>Dettagli della prenotazione:</h3>
      </Row>
      <Row className="glass p-3 mt-3 flex-column">
        {singleReservation && (
          <>
            <Col className="my-2">
              Prenotazione per il:{' '}
              {singleReservation.visit_id
                ? format(
                    new Date(singleReservation.visit_id.date),
                    'dd/MM/yyyy HH:mm'
                  )
                : 'Non trovato!'}
            </Col>

            <Col className="my-2">Nome: {singleReservation.name}</Col>
            <Col className="my-2">Cognome: {singleReservation.surname}</Col>
            <Col className="my-2">Email : {singleReservation.email}</Col>
            <Col className="my-2">
              recapito telefonico: {singleReservation.phoneNumber}
            </Col>
            <Col className="my-2">
              Numero delle persone prenotate: {singleReservation.people}
            </Col>
            <Col className="my-2">
              Altre informazioni: {singleReservation.text}
            </Col>
            <Col className="my-2">
              Data della prenotazione: {singleReservation.date}
            </Col>
            <div className="d-flex my-2">
              <PencilFill
                className="text-warning mx-2"
                onClick={() => {
                  handlePencilUpdate()
                }}
              />
            </div>
          </>
        )}
      </Row>
      <Row className="mt-4">
        <Link
          to={`/handlereservation`}
          className="text-light text-decoration-none"
        >
          <Button style={{ width: '120px' }}>Indietro</Button>
        </Link>
      </Row>
      {showModal && singleReservation && (
        <UpdateReservationModal
          setShowModal={setShowModal}
          reservation={singleReservation}
          reservationId={singleReservation.id}
        />
      )}
    </Container>
  )
}

export default ReservationDetail
