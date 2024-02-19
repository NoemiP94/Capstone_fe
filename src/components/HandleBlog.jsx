import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  GET_POST_IMAGE,
  deleteBlogpost,
  getBlogpost,
  postBlogpost,
  postImage,
  updateBlogpost,
} from '../redux/action/blogs'
import { PencilFill, Trash3Fill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

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
  const spinner = useSelector((state) => state.blogpost.isLoading)

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

  const handleDelete = async (blog) => {
    try {
      console.log(blog.id)
      await dispatch(deleteBlogpost(blog.id, token))
      dispatch(getBlogpost())
      console.log('Eliminato con successo')
    } catch (error) {
      console.log("Errore nell'eliminazione", error)
    }
  }

  return (
    <Container className="my-4 h-100">
      <Row className="flex-column">
        <Col>
          <h3>Inserisci i dati per creare un nuovo articolo:</h3>
        </Col>
        <Col>
          <Form data-bs-theme="dark" bg="dark">
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
                  style={{ width: '90%' }}
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
              Crea
            </Button>
            <Button
              className="ms-3"
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleUpdate()
              }}
            >
              Salva modifiche
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <h4 className="mb-3">Lista degli articoli:</h4>
        {spinner && (
          <Col className="d-flex justify-content-center my-5">
            <div className="colorful"></div>
          </Col>
        )}
        {blogData &&
          blogData.map((blog) => (
            <Col key={blog.id} sm={12} md={5} lg={3} className="mb-3 w-100">
              <Row className="glass d-flex w-100 flex-column flex-md-row justify-content-md-between pe-4">
                <Col
                  sm={12}
                  lg={5}
                  xl={3}
                  className="d-flex justify-content-center "
                >
                  <Card.Img
                    variant="top"
                    src={blog.image}
                    style={{ width: '300px' }}
                  />
                </Col>
                <Col sm={12} lg={6} xl={9} className="ps-5">
                  <p className="text-light my-2">{blog.title}</p>
                  <p className="text-truncate">{blog.content}</p>
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
                  <div className="d-flex my-3">
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
                </Col>
              </Row>
            </Col>
          ))}
      </Row>
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
export default HandleBlog
