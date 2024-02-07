import { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ReservationModal = ({ visitId, setShow }) => {
  const [showModal, setShowModal] = useState(true)

  const handleClose = () => {
    setShow(false), setShowModal(false)
  }

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
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo cognome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il tuo numero di telefono</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>In quanti siete?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
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
