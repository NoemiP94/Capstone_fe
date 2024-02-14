import { Col, Container, Image, Row } from 'react-bootstrap'
import tripadvisor from '../assets/icons8-tripadvisor-50.png'
import instagram from '../assets/icons8-instagram-50.png'
import facebook from '../assets/icons8-facebook-nuovo-50.png'
import whatsapp from '../assets/icons8-whatsapp-50.png'
import mail from '../assets/icons8-messaggio-64.png'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <Container className="h-100">
      <Row className="flex-column my-5">
        <h2>Informazioni utili</h2>
        <Col>
          <Row className="flex-column my-4">
            <h4>I nostri social e contatti</h4>
            <Col className="d-flex align-items-center">
              <div>
                <Image src={instagram} className="w-75" />
              </div>
              <div className="pt-3">
                <Link
                  to="https://www.instagram.com/su_zurfuru_mine/"
                  className="text-decoration-none"
                >
                  <p>@su_zurfuru_mine</p>
                </Link>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div>
                <Image src={facebook} className="w-75" />
              </div>
              <div className="pt-3">
                <Link
                  to="https://www.facebook.com/suzurfurumine/"
                  className="text-decoration-none"
                >
                  <p>Su Zurfuru Mine Ass. Culturale</p>
                </Link>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div>
                <Image src={tripadvisor} className="w-75" />
              </div>
              <div className="pt-3">
                <Link
                  to="https://www.tripadvisor.it/Attraction_Review-g608911-d10737196-Reviews-Su_Zurfuru_Mine-Fluminimaggiore_Province_of_Carbonia_Iglesias_Sardinia.html"
                  className="text-decoration-none"
                >
                  <p>Scrivi una recensione</p>
                </Link>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div>
                <Image src={whatsapp} className="w-75" />
              </div>
              <div className="pt-3">
                <p>+39 340 00 01 995</p>
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <div>
                <Image src={mail} className="w-75" />
              </div>
              <div className="pt-3">
                <p>info@minierasuzurfuru.it</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="my-4">
          <h4>Orari di apertura e ticket</h4>
          <p className="mt-3 text-center">
            Il sito minerario di Su Zurfuru col Museo della Memoria Mineraria
            apre escusivamente su prenotazione tutti i giorni (sabato , domenica
            e festivi compresi) dalle 09.30 alle 18.00 esclusivamente su
            prenotazione. Per tutte le info e prenotazioni cel. 3400001995. In
            caso di mancata risposta inviare messaggio Whatsapp, vi
            ricontatteremo appena possibile.
          </p>
          <p className="text-center">Il ticket d'ingresso è gratuito</p>
        </Col>
        {/*
        <Col>mappa</Col>
        <Col>diventa socio</Col> */}
      </Row>
    </Container>
  )
}

export default Info
