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

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0 position-relative">
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AreaAdmin />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
