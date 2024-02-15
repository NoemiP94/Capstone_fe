import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getVisit } from '../redux/action/visits'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import ReservationModal from './ReservationModal'

const Reservation = () => {
  const visitData = useSelector((state) => state.visit.list)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleShow = (id) => {
    setSelected(id), setShow(true)
    console.log(id)
  }
  useEffect(() => {
    dispatch(getVisit())
  }, [dispatch])

  return (
    <Container className="h-100">
      <Row className="my-3">
        <h1>Prenota la tua visita guidata</h1>
        <p>
          Scegli la visita che desideri tra quelle disponibili e clicca sul
          pulsante Prenota
        </p>
      </Row>
      {visitData &&
        visitData.map((visit) => (
          <Row
            key={visit.id}
            sm={12}
            md={5}
            lg={3}
            className="border rounded glass my-3 p-2 flex-nowrap justify-content-md-between
            align-items-lg-center"
          >
            <Col sm={3} lg={3}>
              Descrizione: {visit.description}
            </Col>
            <Col sm={3} lg={3}>
              Data: {format(new Date(visit.date), 'dd/MM/yyyy HH:mm')}
            </Col>
            <Col sm={3} lg={3}>
              Posti disponibili: {visit.maxPeople}
            </Col>
            <Col sm={3} lg={3}>
              <Button
                className="m-2"
                style={{ width: '100px' }}
                onClick={() => handleShow(visit.id)}
                disabled={show && selected !== visit.id}
              >
                Prenota
              </Button>
            </Col>
          </Row>
        ))}
      {show && selected && (
        <ReservationModal visitId={selected} setShow={setShow} />
      )}
    </Container>
  )
}
export default Reservation
