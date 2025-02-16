import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';  
import Footer from './Components/Footer';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />  {/* ✅ Use the Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />  {/* ✅ Include Footer component */}
      </div>
    </Router>
  );
}

export default App;
