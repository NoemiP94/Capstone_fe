import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_POST_IMAGE,
  getBlogpost,
  postBlogpost,
  postImage,
  updateBlogpost,
} from '../redux/action/blogs'
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons'

const HandleBlog = () => {
  const [blogpost, setBlogpost] = useState({
    title: '',
    content: '',
    id: null,
  })

  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const blogData = useSelector((state) => state.blogpost.list)
  useEffect(() => {
    dispatch(getBlogpost())
  }, [dispatch])
  const [formImg, setFormImg] = useState(null)
  const [updatedBlogpost, setUpdatedBlogpost] = useState(null)
  const [idBlogpost, setIdBlogpost] = useState('')

  const handleUploadImage = async (blogId) => {
    try {
      console.log(blogId)

      if (formImg) {
        const id_post = blogId ? blogId.toString() : null
        if (id_post) {
          const response = await postImage(id_post, formImg, token)
          if (response !== null) {
            console.log('Image uploaded correctly', response)
            dispatch({
              type: GET_POST_IMAGE,
              payload: response.url,
            })
          } else {
            console.log('Image upload successful, but no URL returned')
          }
        } else {
          console.log('Blogpost ID not recovered')
        }
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  const handlePencilUpdate = (blog) => {
    console.log('Matita cliccata!')
    setUpdatedBlogpost(blog)
    setIdBlogpost(blog.id)
    setBlogpost({
      title: blog.title,
      content: blog.content,
      id: blog.id,
    })
  }

  const handleUpdate = async () => {
    try {
      await dispatch(updateBlogpost(idBlogpost, blogpost, token))
      dispatch(getBlogpost())
      console.log('Modificato con successo')
    } catch (error) {
      console.log("Errore nell'aggiornamento", error)
    }
  }

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
                value={blogpost.title}
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
                  value={blogpost.content}
                  onChange={(e) => {
                    setBlogpost({
                      ...blogpost,
                      content: e.target.value,
                    })
                  }}
                />
              </div>
            </Form.Group>
            <Button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                dispatch(postBlogpost(blogpost, token)).then(
                  dispatch(getBlogpost())
                )
              }}
            >
              Salva
            </Button>
            <Button
              className="ms-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleUpdate()
              }}
            >
              Modifica
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <h4 className="mb-3">Lista degli articoli:</h4>
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
                  <Trash3Fill className="text-danger mx-2" />
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
export default HandleBlog

// ogni post ha un pulsante per modificare(riempe di nuovo il form per la creazione)
// e un pulsante per eliminare
