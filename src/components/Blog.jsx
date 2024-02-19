import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogpost } from '../redux/action/blogs'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogData = useSelector((state) => state.blogpost.list)
  const spinner = useSelector((state) => state.blogpost.isLoading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBlogpost())
  }, [dispatch])

  return (
    <Container bg="bg-black" className="my-3 mx-auto w-100 h-100 ">
      <h1>Su Zurfuru blog</h1>
      <Row className="g-4 mt-3 ">
        {spinner && (
          <Col className="d-flex justify-content-center my-5">
            <div className="colorful"></div>
          </Col>
        )}
        {blogData &&
          blogData.map((blog) => (
            <Col key={blog.id} className="mb-2 w-100">
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
                  <Card.Title className="text-light my-4">
                    {blog.title}
                  </Card.Title>
                  <p className="text-truncate">{blog.content}</p>
                  <Button className="my-2">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-light text-decoration-none"
                    >
                      Apri l'articolo
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Col>
          ))}
      </Row>
    </Container>
  )
}
export default Blog
