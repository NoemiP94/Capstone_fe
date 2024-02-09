import { useState } from 'react'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { postVisit } from '../redux/action/visits'

const HandleVisit = () => {
  const [visit, setVisit] = useState({
    description: '',
    date: '',
    maxPeople: '',
  })

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const handleDate = (e) => {
    const selected = new Date(e.target.value)
    if (!isNaN(selected)) {
      const formatted = selected.toISOString().slice(0, 16)
      setVisit({
        ...visit,
        date: formatted,
      })
    } else {
      console.log('Non valido!')
    }
  }
  return (
    <Container className="my-4">
      <Row className="flex-column">
        <Col>
          <h3>Inserisci i dati per creare una nuova visita:</h3>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3 w-50">
              <Form.Label>
                Inserisci una breve descrizione della visita
              </Form.Label>
              <Form.Control
                type="text"
                // value={blogpost.title}
                onChange={(e) => {
                  setVisit({
                    ...visit,
                    description: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Inserisci data e ora</Form.Label>
              <FormControl
                type="datetime-local"
                className="w-25"
                onChange={handleDate}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                Inserisci il numero massimo di persone prenotabili
              </Form.Label>
              <FormControl
                type="number"
                className="w-25"
                onChange={(e) => {
                  setVisit({
                    ...visit,
                    maxPeople: e.target.value,
                  })
                }}
              />
            </Form.Group>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                dispatch(postVisit(visit, token))
                // .then(
                //   dispatch(getBlogpost())
                // )
              }}
            >
              Salva
            </Button>
            {/* <Button
              className="ms-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleUpdate()
              }}
            >
              Modifica
            </Button> */}
          </Form>
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <h4 className="mb-3">Lista delle visite:</h4>
        {blogData &&
          blogData.map((blog) => (
            <Col
              key={blog.id}
              blog={blog}
              sm={12}
              md={5}
              lg={3}
              className="mb-2"
            >
              <Card className="glass p-2">
                <Card.Img variant="top" src={blog.image} />

                <p className="text-light my-2">{blog.title}</p>
                <p className="overflow-scroll" style={{ height: '150px' }}>
                  {blog.content}
                </p>
                <p>{blog.date}</p>
                <Form.Control
                  className="mt-3"
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const formData = new FormData()
                      formData.append('image', file)
                      setFormImg(formData)
                    }
                  }}
                />
                <Button
                  className="my-2"
                  onClick={() => {
                    handleUploadImage(blog.id)
                  }}
                >
                  Inserisci immagine
                </Button>
                <div className="d-flex my-2">
                  <PencilFill
                    className="text-warning mx-2"
                    onClick={() => {
                      handlePencilUpdate(blog)
                    }}
                  />
                  <Trash3Fill
                    className="text-danger mx-2"
                    onClick={() => {
                      handleDelete(blog)
                    }}
                  />
                </div>
              </Card>
            </Col>
          ))}
      </Row> */}
      <Row className="my-4">
        <Button style={{ width: '100px' }} className="ms-2">
          <Link to="/admin" className="text-light text-decoration-none">
            Indietro
          </Link>
        </Button>
      </Row>
    </Container>
  )
}

export default HandleVisit
