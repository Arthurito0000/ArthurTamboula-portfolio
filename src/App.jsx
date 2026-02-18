import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CyberSecurity from './pages/CyberSecurity';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { useMousePosition } from './hooks/useMousePosition';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const { x, y } = useMousePosition();

  return (
    <Router basename="/ArthurTamboula-portfolio">
      <div className="app-container">
        {/* Curseur interactif en arrière-plan */}
        <motion.div
          className="mouse-glow"
          animate={{ x: x - 250, y: y - 250 }}
          transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        />

        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cybersecurity" element={<CyberSecurity />} />
          </Routes>
        </main>

        <footer id="contact">
          <div className="footer-content">
            <h2>Prêt à <span>collaborer</span> ?</h2>
            <p>Que ce soit pour du développement ou de la cybersécurité, je suis à l'écoute.</p>
            <div className="contact-grid">
              <a href="https://wa.me/237654141681" target="_blank" rel="noreferrer" className="contact-item">
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:arthurotamboula10@gmail.com" className="contact-item">
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a href="https://linkedin.com/in/arthur-tamboula" target="_blank" rel="noreferrer" className="contact-item">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Arthur Tamboula | Dev & Security</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
