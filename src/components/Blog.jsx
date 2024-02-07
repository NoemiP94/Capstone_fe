import { useEffect } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogpost } from '../redux/action/blogs'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogData = useSelector((state) => state.blogpost.list)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogpost())
  }, [dispatch])
  return (
    <Container bg="bg-black" className="my-3 mx-3 w-100 ">
      <h1>Su Zurfuru blog</h1>
      <Row xs={1} md={2} className="g-4 mt-3 ">
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
              <Card className="glass">
                <Card.Img variant="top" src={blog.image} />
                <Card.Body>
                  <Card.Title className="text-light my-2">
                    {blog.title}
                  </Card.Title>
                  <Button className="mt-2">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-light text-decoration-none"
                    >
                      Apri l'articolo
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
export default Blog
