import Home from "../components/pages/home.jsx";
import About from "../components/pages/about.jsx";
import Contact from "../components/pages/contact.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
      <Router>
          <div>
              <div>
                  <ul>
                      <li><Link to="/home">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/contact">Contact</Link></li>
                  </ul>
                  <Routes>
                      <Route path="/home" element={<Home/>} />
                      <Route path="/about" element={<About/>} />
                      <Route path="/contact" element={<Contact/>} />
                  </Routes>
              </div>
          </div>
      </Router>
  )};

export default App