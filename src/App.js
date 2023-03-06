import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Container from './components/Container';
import Footer from './components/Footer'
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';

function App() {
  return (
   <Router>
    <Navbar />
    <Container customClass='minHeight'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/newproject" element={<NewProject />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
    </Container>
    <Footer />
   </Router>
  );
}

export default App;
