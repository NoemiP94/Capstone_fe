import { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postReservation } from '../redux/action/reservations'

const ReservationModal = ({ visitId, setShow }) => {
  const [showModal, setShowModal] = useState(true)
  const dispatch = useDispatch()
  const [newReservation, setNewReservation] = useState({
    email: '',
    name: '',
    surname: '',
    phoneNumber: '',
    people: '',
    visit_id: visitId,
  })

  const handleClose = () => {
    setShow(false), setShowModal(false)
  }

  useEffect(() => {
    setNewReservation((prevReservation) => ({
      ...prevReservation,
      visit_id: visitId,
    }))
  }, [visitId])

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Compila il form (Attenzione per modificare o eliminare la
            prenotazione contattaci via email o telefonicamente)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci la tua email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    email: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo nome</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    name: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo cognome</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    surname: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo numero di telefono</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    phoneNumber: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>In quanti siete?</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setNewReservation({
                    ...newReservation,
                    people: e.target.value,
                  })
                }}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                console.log(newReservation)
                e.preventDefault(), dispatch(postReservation(newReservation))
              }}
            >
              Invia prenotazione
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

export default ReservationModal
