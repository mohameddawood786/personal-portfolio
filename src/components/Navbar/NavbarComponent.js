import React, { useState, useEffect } from 'react';
import './NavbarComponent.css';
import logo from '../../assets/images/logo.png';

function NavbarComponent() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'experience', 'contact'];
      let current = '';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 110;
          const sectionHeight = section.offsetHeight;

          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = id;
          }
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMenuOpen(false); // close menu after clicking
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="nav-logo-icon" />
        Mohamed Dawood M
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
        {['home', 'about', 'skills', 'projects', 'achievements', 'experience', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleClick(e, section)}
            className={activeSection === section ? 'active' : ''}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavbarComponent;
