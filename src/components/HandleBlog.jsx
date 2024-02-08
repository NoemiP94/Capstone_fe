import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postBlogpost } from '../redux/action/blogs'

const HandleBlog = () => {
  const [blogpost, setBlogpost] = useState({
    title: '',
    content: '',
  })

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  return (
    <Container className="my-4">
      <Row className="flex-column">
        <Col>
          <h3>Inserisci i dati per creare un nuovo articolo:</h3>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3 w-50">
              <Form.Label>Inserisci il titolo</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setBlogpost({
                    ...blogpost,
                    title: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci il contenuto</Form.Label>
              <div>
                <textarea
                  name="contenuto"
                  cols="70"
                  rows="15"
                  onChange={(e) => {
                    setBlogpost({
                      ...blogpost,
                      content: e.target.value,
                    })
                  }}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Control type="file" />
              <Button>Inserisci immagine</Button>
            </Form.Group>

            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                dispatch(postBlogpost(blogpost, token))
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
export default HandleBlog
// form creazione post + bottone upload immagini
// lista(get) di tutti i blogpost
// ogni post ha un pulsante per modificare(riempe di nuovo il form per la creazione)
// e un pulsante per eliminare
