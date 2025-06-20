import React, { useRef, useEffect, useState } from 'react';
import './Projects.css';
import woolAppImg from '../../assets/images/wool_app.jpg';
import Face_Reg from '../../assets/images/FRs.jpg';
import Tamil_ocr from '../../assets/images/OCR.jpg';
import Pythonstat from '../../assets/images/py.jpg';
import Song from '../../assets/images/SR.jpg'; // new image

const projects = [
  {
    title: 'Wool Supply Chain Monitoring App',
    description:
      'Developed a comprehensive mobile application for end-to-end tracking of wool production, trading, and market analytics, enhancing transparency, operational control, and supply chain efficiency.',
    image: woolAppImg,
    codeLink: 'https://github.com/mohameddawood786/SIH-2023',
  },
  {
    title: 'Face Recognition Attendance System',
    description:
      'Engineered an AI-based attendance management system leveraging facial recognition technology to automate, authenticate, and secure attendance records, significantly minimizing manual errors and proxy instances.',
    image: Face_Reg,
    codeLink: 'https://github.com/mohameddawood786/Deep-Learning-Projects/blob/main/Face%20Recognition%20Using%20CNN.ipynb',
  },
  {
    title: 'AI-Based OCR for Tamil Handwriting',
    description:
      'Designed and implemented a deep learning-based OCR system integrating CRNN and NLP models for digitizing handwritten Tamil manuscripts. The solution was academically recognized and submitted to the IEEE ICSIE Conference.',
    image: Tamil_ocr,
    codeLink: 'https://github.com/mohameddawood786/DocuMorph-AI-Based-OCR-for-Translating-and-Digitizing-Tamil-Handwritten-Texts',
  },
  {
  title: 'Chatbot for Song Recommender System',
  description:
    'Developed a Python-based chatbot leveraging NLP and sentiment analysis to recommend mood-based songs through real-time user interactions.',
  image: Song, // replace with actual image
  codeLink: 'https://github.com/mohameddawood786/', // replace with actual link
},
  {
    title: 'Python + Stats for Financial Analysis',
    description:
      'Applied Python-based statistical techniques and financial modeling to analyze market patterns, perform risk assessment, and support data-driven investment strategies with quantitative insights.',
    image: Pythonstat,
    codeLink: 'https://github.com/mohameddawood786/Amazon_Sales.git',
  },

];

const Projects = () => {
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardsPerPage = 3;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  useEffect(() => {
    const grid = gridRef.current;
    const onScroll = () => {
      const scrollLeft = grid.scrollLeft;
      const cardWidth = grid.firstChild.offsetWidth + 20; // card + gap
      const index = Math.round(scrollLeft / (cardWidth * cardsPerPage));
      setActiveIndex(index);
    };
    grid.addEventListener('scroll', onScroll);
    return () => grid.removeEventListener('scroll', onScroll);
  }, [projects.length]);

  return (
    <div className="projects-section" id="projects">
      <h2>
        Projects <span>Made</span>
      </h2>

      <div className="projects-grid" ref={gridRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-title">{project.title}</div>
            <div className="overlay">
              <p>{project.description}</p>
              <a
                href={project.codeLink}
                className="code-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code &lt;/&gt;
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Projects;
