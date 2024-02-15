import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import hero from '../assets/hero2.jpg'
import lights from '../assets/lights.jpg'
import write from '../assets/write.jpg'

const MyCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Carousel
      activeIndex={index}
      onSelect={() => {}}
      controls={false}
      indicators={false}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={hero}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={lights}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={write}
          alt="Third slide"
        />
      </Carousel.Item>
      <div className="hero-container text-light">
        <h1 className="custom-title">MUSEO DELLA</h1>
        <h1 className="custom-title">MEMORIA</h1>
        <h1 className="custom-title">MINERARIA</h1>
        <h1 className="custom-title">SU ZURFURU</h1>
      </div>
    </Carousel>
  )
}

export default MyCarousel
