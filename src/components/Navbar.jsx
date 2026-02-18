import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Code2 } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isCyber = location.pathname === '/cybersecurity';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="logo">
        {isCyber ? <Shield className="icon" /> : <>ARTHUR <span>TAMBOULA</span></>}
      </Link>

      <ul className="nav-links">
        {!isCyber ? (
          <>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#skills">Stack</a></li>
          </>
        ) : (
          <>
            <li><a href="#experience">Expertise</a></li>
            <li><a href="#tools">Arsenal</a></li>
          </>
        )}
      </ul>

      <div className="nav-actions">
        {isCyber ? (
          <Link to="/" className="switch-btn dev">
            <Code2 size={18} />
            <span>Côté Dev</span>
          </Link>
        ) : (
          <Link to="/cybersecurity" className="switch-btn cyber">
            <Shield size={18} />
            <span>Autre Casque</span>
          </Link>
        )}
        <button className="cta-btn">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
