import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/company" element={<Company />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/newproject" element={<NewProject />} />
    </Routes>
    <p>Footer</p>
   </Router>
  );
}

export default App;
