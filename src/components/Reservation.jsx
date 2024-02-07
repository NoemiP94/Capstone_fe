import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getVisit } from '../redux/action/visits'
import { useEffect } from 'react'

const Reservation = () => {
  const visitData = useSelector((state) => state.visit.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVisit())
  }, [dispatch])
  return (
    <Container>
      <Row className="my-3">
        <h1>Prenota la tua visita guidata</h1>
      </Row>
      {visitData &&
        visitData.map((visit) => (
          <Row
            key={visit.id}
            sm={12}
            md={5}
            lg={3}
            className="border rounded glass my-3 p-2"
          >
            <Col>Descrizione: {visit.description}</Col>
            <Col>Data: {visit.date}</Col>
            <Col>Posti disponibili: {visit.maxPeople}</Col>
            <Button className="m-2" style={{ width: '120px' }}>
              Prenota
            </Button>
          </Row>
        ))}
    </Container>
  )
}
export default Reservation
