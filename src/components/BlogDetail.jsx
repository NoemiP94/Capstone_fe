import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getBlogDetail } from '../redux/action/blogs'
import { Button, Col, Container, Row } from 'react-bootstrap'

const BlogDetail = () => {
  const { id } = useParams()
  const singlePost = useSelector((state) => state.blogpost.singlePost)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBlogDetail(id))
  }, [dispatch, id])

  return (
    <Container className="border rounded p-4 glass mt-5">
      {singlePost && (
        <>
          <Row className="my-3">
            <h1>{singlePost.title}</h1>
          </Row>
          <Row className="flex-column">
            <Col className="mb-3">
              <img
                src={singlePost.image}
                alt={singlePost.title}
                className="w-50"
              />
            </Col>
            <Col className="mb-3">{singlePost.content}</Col>
            <Col>{singlePost.date}</Col>
          </Row>
          <Row className="mt-4">
            <Button style={{ width: '120px' }}>
              <Link to={`/blog`} className="text-light text-decoration-none">
                Indietro
              </Link>
            </Button>
          </Row>
        </>
      )}
    </Container>
  )
}

export default BlogDetail
