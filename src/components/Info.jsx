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
        <Col className="my-4">
          <div className="mb-4">
            <h4>Come trovarci</h4>
          </div>
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3082.0357906541317!2d8.498716376364625!3d39.42331511550129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e775e1e2422cd9%3A0x7292d517c12c325c!2sMiniera%20di%20Su%20Zurfuru!5e0!3m2!1sit!2sit!4v1707917922086!5m2!1sit!2sit"
                width="320vw"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="ms-4 mt-3">
              <p>Fluminimaggiore </p>
              <p>SS 126 km</p>
              <p>Lat: 39.423636 - Lng: 8.500326</p>
            </div>
          </div>
        </Col>
        <Col className="my-4">
          <h4>Vorresti aiutarci?</h4>
          <p className="mt-3 text-center">
            Manda una mail al nostro indirizzo con oggetto "RICHIESTA
            TESSERAMENTO". Ti contatteremo al più presto con tutte le
            informazioni necessarie per diventare nostro socio!
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Info
