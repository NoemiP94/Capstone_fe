import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import Login from './components/Login'
import AreaAdmin from './components/AreaAdmin'
import HandleBlog from './components/HandleBlog'
import HandleVisit from './components/HandleVisit'
import HandleReservation from './components/HandleReservation'
import ReservationDetail from './components/ReservationDetail'
import HandleUser from './components/HandleUser'
import Homepage from './components/Homepage'
import History from './components/History'
import Info from './components/Info'
import NotFound from './components/NotFound'
import { useEffect, useState } from 'react'
import Open from './components/Open'

function App() {
  const [showOpen, setShowOpen] = useState(true)
  const [showHome, setShowHome] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpen(false)
    }, 8000) // nasconde Open dopo 12 secondi

    const homeTimer = setTimeout(() => {
      setShowHome(true)
    })

    return () => {
      clearTimeout(timer)
      clearTimeout(homeTimer)
    } //pulisce il timer dopo che  il componente viene smontato
  }, [])

  return (
    <BrowserRouter>
      <Container fluid className="px-0 position-relative h-100">
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AreaAdmin />} />
          <Route path="/handleblog" element={<HandleBlog />} />
          <Route path="/handlevisit" element={<HandleVisit />} />
          <Route path="/handlereservation" element={<HandleReservation />} />
          <Route
            path="/handlereservation/:id"
            element={<ReservationDetail />}
          />
          <Route path="/user" element={<HandleUser />} />
          {showOpen && <Route path="/" element={<Open />} />}
          {showHome && <Route path="/" element={<Homepage />} />}
          <Route path="/history" element={<History />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
