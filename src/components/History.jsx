import { Col, Container, Image, Row } from 'react-bootstrap'
import image2 from '../assets/laveria_museum_1.jpg'
import logo from '../assets/logo.png'

const History = () => {
  return (
    <Container className="h-100">
      <Row className="flex-column mt-4">
        <h2>Cenni storici</h2>
        <Col>
          <Row className="flex-column my-3">
            <Col className="d-flex justify-content-center my-3">
              <Image src={image2} className="w-50" />
            </Col>
            <Col className="text-center">
              <p>
                La miniera di su Zurfuru fu dichiarata scoperta nel 1889, e, per
                la prima volta, data in concessione per la coltivazione di
                piombo e zinco, alla Victoria Mining Limited Company. In seguito
                la concessione passò ad altre società minerarie, tra cui, nel
                1905, alla Pertusola Mining Ltd.
              </p>
              <p>
                Nel frattempo furono installati nuovi macchinari ad altissima
                tecnologia e di notevole importanza per il periodo storico, in
                particolare un compressore prodotto in America dalla Ingersoll
                Rand Company di New York, e soprattutto il primo generatore
                idroelettrico della Sardegna, che sfruttava la forza e la
                portata dell’acqua proveniente dalla vicina fonte di Pubusinu, e
                connesso ad essa attraverso una canala lunga circa 5 km!
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="flex-column my-3">
            <Col className="d-flex justify-content-center my-3">
              <Image src={image2} className="w-50" />
            </Col>
            <Col className="text-center">
              <p>
                La Pertusola crea anche una nuova laveria con uno straordinario
                impianto di flottazione, tutt’ora ben conservato, e un’estesa
                rete ferroviaria che poneva in comunicazione le due vicine
                miniere di Gutturu Pala e Terras Nieddas, da cui arrivavano i
                minerali destinati al processo di arricchimento nell’impianto di
                flottazione.
              </p>
              <p>
                Nel 1927 la società realizza un sistema di trasporto teleferico,
                che dalla laveria consentiva il trasferimento degli scarti sul
                versante del monte opposto, affinché non venisse riversato
                direttamente nel torrente causando l’inquinamento dell’acqua e
                le polemiche degli agricoltori e degli abitanti di
                Fluminimaggiore.
              </p>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="flex-column my-3">
            <Col className="d-flex justify-content-center my-3">
              <Image src={image2} className="w-50" />
            </Col>
            <Col className="text-center">
              <p>
                Per un lungo periodo Su Zurfuru rimase inattiva, tranne il
                generatore di energia elettrica e l’impianto di flottazione, e
                fu nel 1943 che ripresero i lavori di estrazione. Tuttavia dal
                1949, la miniera concentrò la sua produttività sull’estrazione
                di un minerale fin da allora ignorato e definito materiale di
                scarto: la Fluorite.
              </p>
              <p>
                In seguito alla crisi dell’industria mineraria, nel 1969, la
                Pertusola abbandonò la Sardegna mentre la concessione di Su
                Zurfuru passò ad altre società. Fu con la Sim S.p.a., che la
                miniera, nel 1993, chiuse definitivamente i cantieri.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-5">
        <h2>L'Associazione</h2>
        <Col>
          <Image src={logo} className="w-75" />
        </Col>
        <Col>
          <p>
            Siamo un gruppo di minatori e appassionati di storia e archeologia
            mineraria, fondatori dell’Associazione “Su Zurfuru Mine” che dal
            maggio 2016, grazie alla collaborazione con il Comune di
            Fluminimaggiore, sono impegnati nel rendere fruibile e valorizzare
            il sito minerario.
          </p>
          <p>
            L’Associazione opera senza scopo di lucro, con l’obiettivo di
            conservare e trasmettere alla collettività la storia della miniera e
            degli uomini e donne che vi hanno lavorato, insieme alle vicende ed
            alle tecnologie connesse all’attività estrattiva, che hanno
            connotato e segnato indelebilmente l’identità del territorio e dei
            suoi abitanti.
          </p>
          <p>
            L’Associazione, tramite le attività di ricerca e studio delle fonti
            documentali, opera anche per riportare alla luce le vicende legate
            alle lotte ed ai sacrifici che i minatori hanno dovuto sopportare
            per poter riscattare i loro diritti al lavoro, alla salute, ad una
            vita dignitosa, per il proprio futuro e quello dei propri figli.
          </p>
          <p>
            Alla valorizzazione museale del sito hanno contribuito
            spontaneamente anche molti ex-minatori e le loro famiglie, mettendo
            a disposizione dei visitatori i loro ricordi e gli oggetti
            accumulati in tanti anni di duro lavoro in miniera.
          </p>
          <p>
            L’attività dell’Associazione si esplica inoltre attraverso
            l’organizzazione di convegni, esposizioni, laboratori didattici,
            escursioni ed eventi a tema.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default History
