import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-wrapper" id="about">
      {/* Particle elements */}
    <div className="particles">
  {Array.from({ length: 20 }).map((_, i) => (
    <span key={i}></span>
  ))}
</div>


      <div className="about-overlay"></div>

      <div className="about-container">
        <div className="about-content">
          <h2>
            About <span>Me</span>
          </h2>
          <p className="intro-line">
            <span className="intro-start">I'm</span>{' '}
            <span className="name-highlight">Dawood</span>
          </p>
<p>
  I’m an AI and Data Science enthusiast with a passion for turning data into meaningful insights and intelligent solutions. I enjoy exploring how technology can simplify decision-making and drive smarter outcomes. With a strong interest in Business Analytics and intelligent systems, I’m always eager to learn, embrace new ideas, and contribute to projects that create real value.
  <br /><br />
  What excites me about this field is its ability to uncover patterns within data, leading to informed, impactful decisions. I value environments that encourage continuous learning, innovation, and collaboration, where challenges become opportunities.
  <br /><br />
  Driven by curiosity, I strive to stay ahead of trends in AI, analytics, and automation. My vision is to grow as a versatile professional — combining technical expertise with thoughtful, responsible solutions that improve experiences and shape smarter systems.
</p>

          <div className="about-info-grid">
            <div className="info-box">
              <span className="label">Experience:</span>
              <span className="value">Fresher</span>
            </div>
            <div className="info-box">
              <span className="label">Phone:</span>
              <span className="value">+91 8248119462</span>
            </div>
            <div className="info-box">
              <span className="label">Email: </span>
              <span className="value"> mhddawood786@gmail.com</span>
            </div>
            <div className="info-box">
              <span className="label">Place:</span>
              <span className="value">Madurai,Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
