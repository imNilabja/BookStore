
import './App.css'
import Dashboard from './pages/Dashboard'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import BookDetails from './components/BookDetails';

function App() {


  return (
    <>
      <Router>
        <Routes>

          
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* PROTECTED ROUTE */}
          <Route element={<ProtectedRoute />}>
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book1" element={<BookDetails />} />

          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
