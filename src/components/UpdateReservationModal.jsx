import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {
  deleteReservation,
  getReservationDetail,
  updateReservation,
} from '../redux/action/reservations'

const UpdateReservationModal = ({
  reservation,
  setShowModal,
  reservationId,
}) => {
  const dispatch = useDispatch()
  const [newReservation, setNewReservation] = useState({
    id: reservation.id,
    email: reservation.email,
    name: reservation.name,
    surname: reservation.surname,
    phoneNumber: reservation.phoneNumber,
    people: reservation.people,
    visit_id: reservation.visit_id.id,
  })
  const handleClose = () => {
    setShowModal(false)
  }

  const token = localStorage.getItem('token')
  const handleSending = async (e) => {
    e.preventDefault()
    console.log(reservationId)
    console.log(newReservation)
    if (!reservationId) {
      console.log('ID non valido', reservationId)
      return
    }
    try {
      await dispatch(updateReservation(reservationId, newReservation, token))
      setShowModal(false)

      await dispatch(getReservationDetail(reservationId, token))
    } catch (error) {
      console.log('Error', error)
    }
  }

  return (
    <>
      <Modal
        show={true}
        onHide={handleClose}
        className="glass"
        data-bs-theme="dark"
        bg="dark"
      >
        <Modal.Header>
          <Modal.Title>Modifica la prenotazione:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={newReservation.email}
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    email: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={newReservation.name}
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                value={newReservation.surname}
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    surname: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero di telefono</Form.Label>
              <Form.Control
                type="text"
                value={newReservation.phoneNumber.toString()}
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    phoneNumber: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Numero di persone</Form.Label>
              <Form.Control
                type="text"
                value={newReservation.people}
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    people: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSending}>
              Salva prenotazione
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UpdateReservationModal
