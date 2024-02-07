import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/Navbar'
import Blog from './components/Blog'
import BlogDetail from './components/BlogDetail'

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <NavBar />
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
