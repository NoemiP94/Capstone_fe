import { Col, Container, Image, Row } from 'react-bootstrap'
import mostra from '../assets/light1.jpg'
import image2 from '../assets/laveria_museum_1.jpg'
import compressor from '../assets/compressore.jpg'
import laveria from '../assets/laveria.jpg'
import MyCarousel from './MyCarousel'

const Homepage = () => {
  return (
    <Container className="h-100 px-0 mx-0">
      <Row style={{ width: '100vw' }}>
        <MyCarousel />
        <Row className="custom">
          <Col className="my-5">
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>
                  “Più di ogni altro, forse, il minatore può rappresentare il
                  prototipo del lavoratore manuale, non solo perché il suo
                  lavoro è così esageratamente orribile, ma anche perché è così
                  virtualmente necessario e insieme così lontano dalla nostra
                  esperienza, così invisibile, per modo di dire, che siamo
                  capaci di dimenticarlo come dimentichiamo il sangue che ci
                  scorre nelle vene.“{' '}
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Le strade di Wigan Pier (1937) -{' '}
                <cite title="Source Title">George Orwell</cite>
              </figcaption>
            </figure>
          </Col>
        </Row>
        <Row className="mt-5 pt-5 custom">
          <h2>Il museo</h2>
          <p>
            All’interno del museo si possono conoscere le attrezzature e gli
            strumenti da lavoro, le documentazioni, i macchinari originali del
            sito e gli oggetti personali degli ex-minatori.
          </p>
          <Col className="mt-5">
            <Row className="flex-nowrap align-items-center mb-5 flex-column flex-lg-row">
              <Col sm={4}>
                <Image src={mostra} className=" image-border mb-4" />
              </Col>
              <Col sm={8} className="text-center">
                {' '}
                <h4>Mostra "Vita nel buio"</h4>
                <p>
                  Rappresenta uno spaccato della vita mineraria dalla fine del
                  1700 ai giorni nostri. Di notevole importanza la collezione di
                  lampade da minatore che ripercorre la storia
                  dell'illuminazione in miniera.
                </p>
              </Col>
            </Row>
            <Row className="flex-nowrap align-items-center mb-5 flex-column flex-lg-row">
              <Col sm={8} className="text-center">
                {' '}
                <h4>Il compressore</h4>
                <p>
                  Un grosso e pesante macchinario ad altissima tecnologia,
                  prodotto a New York dalla società americana Ingersol Rand
                  Company. Grazie al compressore azionato da motore elettrico
                  che trovava alimentazione da un formidabile impianto
                  idroelettrico, si poteva produrre aria compressa per le
                  perforatrici usate in galleria.
                </p>
              </Col>{' '}
              <Col sm={4}>
                <Image src={compressor} className="w-100 image-border mb-4" />
              </Col>
            </Row>
            <Row className="flex-nowrap align-items-center mb-5 flex-column flex-lg-row">
              <Col sm={4}>
                <Image src={image2} className="w-100 image-border mb-4" />
              </Col>
              <Col sm={8} className="text-center">
                {' '}
                <h4>La sala turbina</h4>
                <p>
                  Fu l’anno 1895 quando venne installato per la prima volta in
                  Sardegna, il generatore di corrente idroelettrico, connesso
                  alla Fonte di Pubusinu attraverso un impianto di
                  canalizzazione lungo circa 5 km. Una novità senza precedenti
                  per la storia mineraria dell’isola, che vide la miniera di Zu
                  Zurfuru la protagonista di questo primato
                </p>
              </Col>
            </Row>
            <Row className="flex-nowrap align-items-center mb-5 flex-column flex-lg-row">
              <Col sm={8} className="text-center">
                {' '}
                <h4>La laveria</h4>
                <p>
                  Nella parte alta della laveria è presenta ancora l'impianto di
                  flottazione utilizzato per la frantumazione primaria del
                  materiale. L'impianto è composto da un mulino a sfere della
                  Simmons e sono presenti due batterie di celle di flottazione
                  completamente in legno della Denver, di straordinaria
                  importanza dal punto di vista dell'archeologia industriale.
                  L'acqua veniva portata tramite una condotta, in parte ancora
                  visibile, dalle sorgenti di Pubusinu.
                </p>
              </Col>{' '}
              <Col sm={4}>
                <Image src={laveria} className="w-100 image-border mb-4" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default Homepage
