import React from 'react';
import './ContactFooter.css';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const ContactFooter = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>MD's Portfolio</h3>
<p>
  Thanks for checking out my portfolio.<br />
  Let’s connect, share ideas, and build cool things together.
</p><br/> 
<p>
  Onwards and upwards 🚀
  Drop me a message anytime!
</p>

        </div>

      <div className="footer-col">
  <h3>Quick Links</h3>
  <ul>
    <li><a href="#about">➤ About</a></li>
    <li><a href="#projects">➤ Projects</a></li>
    <li><a href="#skills">➤ Skills</a></li>
    <li><a href="#achievements">➤ Achievements</a></li>
    <li><a href="#experience">➤ Experience</a></li>
    <li><a href="#contact">➤ Contact</a></li>
  </ul>
</div>


      <div className="footer-col">
  <h3>Contact Info</h3>
  <p><Phone size={16} /> <a href="tel:+918248119462">+91 8248119462</a></p>
  <p><Mail size={16} /> <a href="mailto:mhddawood786@gmail.com">mhddawood786@gmail.com</a></p>
  <p><MapPin size={16} /> Madurai,Tamilnadu, India </p>
  <div className="socials">
    <a href="https://www.linkedin.com/in/mohamed-dawood-m-a679b42a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin-in"></i></a>
    <a href="https://github.com/mohameddawood786"><i className="fab fa-github"></i></a>
    <a href="https://t.me/+918248119462"><i className="fab fa-telegram"></i></a>
    <a href="https://www.instagram.com/mr.dawood_official?igsh=MTZ4cWl4amdya2o4NQ=="><i className="fab fa-instagram"></i></a>
    <a href="https://drive.google.com/file/d/1ykkXRnNb7AUCMxdehGv_hPtx3TC-_KZ5/view?usp=sharing"><i className="fas fa-id-badge"></i></a>
  </div>
</div>

      </div>

      <div className="footer-bottom">
        <p>Designed With ❤️ By Dawood</p>
      </div>

      {/* Floating Icons */}
      <a
        href="https://wa.me/918248119462"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <button className="scroll-top-btn" onClick={scrollToTop}>
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default ContactFooter;
