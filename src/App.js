import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Container from './components/Container';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';

function App() {
  return (
   <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/company">Company</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/newproject">New Project</Link>
    </div>
    <Container customClass='minHeight'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/company" element={<Company />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/newproject" element={<NewProject />} />
      </Routes>
    </Container>
    <p>Footer</p>
   </Router>
  );
}

export default App;
