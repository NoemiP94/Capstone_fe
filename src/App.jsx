import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <NavBar />
        <Routes></Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
