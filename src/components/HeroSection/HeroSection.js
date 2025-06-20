import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
import './HeroSection.css';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 
import profileImage from '../../assets/images/md.png';

function HeroSection() {
  

  return (
    <div className="hero-wrapper" id="home">
      <div className="hero-bg">
  <div className="stars"></div>
  <div className="stars2"></div>
  <div className="stars3"></div>
</div>


      <div className="hero-container">
        <div className="hero-left">
          <h3>Hi There 👋</h3>
          <h1>I&apos;m Mohamed Dawood</h1>
          <div className="typing-text">
            <TypeAnimation
  sequence={[
    'AI Engineer 💻',
    2000,
    'ML Developer 🤖',
    2000,
    'Data Scientist 📊',
    2000,
    'Data Analyst 📈',
    2000,
    'Python Developer 🐍',
    2000,
    'Deep Learning Enthusiast 🧠',
    2000,
    'AI/ML Researcher 🔍',
    2000,
    'Business Intelligence Analyst 📊💡',
    2000,
    'Web Developer 🌐',
    2000,
  ]}
              wrapper="b"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <button className="hire-btn" onClick={() => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}}>
  Hire Me
</button>

          <div className="social-icons">
  <a href="https://www.linkedin.com/in/mohamed-dawood-m-a679b42a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
  <a href="https://github.com/mohameddawood786" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
 <a href="mailto:mhddawood786@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
  <a href="https://t.me/+918248119462" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
  <a href="https://www.instagram.com/mr.dawood_official?igsh=MTZ4cWl4amdya2o4NQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
</div>

        </div>
        <div className="hero-right">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
