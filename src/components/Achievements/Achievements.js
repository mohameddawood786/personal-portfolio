import React, { useState } from 'react';
import './Achievements.css';

const certifications = [
  {
    title: 'Google Advanced Data Analytics Professional',
    tags: ['Google', 'Analytics', 'Certification'],
    description: 'Professional certification covering advanced data analytics workflows.',
    date: 'May - 2024',
    link: 'https://drive.google.com/file/d/11KujPYkt141hqwUc4Bl8alfJq6w6Hg4Q/view?usp=sharing'
  },
  {
    title: 'Python & Statistics for Financial Analysis',
    tags: ['Python', 'Statistics', 'Finance'],
    description: 'Analyzed market trends, risks, and data-driven investment decisions using Python.',
    date: 'Mar - 2024',
    link: 'https://drive.google.com/file/d/1RUxYJDYAGkfIisthBj74twixuzixoICE/view?usp=sharing'
  },
  {
    title: 'Data Visualization Using Power BI',
    tags: ['Power BI', 'Visualization'],
    description: 'Created dashboards and business insights using Microsoft Power BI.',
    date: 'Feb - 2024',
    link: 'https://drive.google.com/file/d/1fb7OQ6DN3t6aM9U3tGDbVcH9wrwu51Kt/view?usp=sharing'
  },
  {
    title: 'Introduction to Generative AI',
    tags: ['AI', 'Google', 'Gen AI'],
    description: 'Fundamentals of generative AI models and their applications.',
    date: 'Jan - 2024',
    link: 'https://drive.google.com/file/d/1xAgtZmD2YXturd5mWvIdabTnfJZWFExx/view?usp=drive_link'
  },
  {
    title: 'Google Cybersecurity Professional Course',
    tags: ['Cybersecurity', 'Google'],
    description: 'Comprehensive training on cybersecurity fundamentals and defense strategies.',
    date: 'Dec - 2023',
    link: 'https://drive.google.com/file/d/1gtY4Su-D8GBdps_SVDrCdskVvth94wE2/view?usp=sharing'
  },
  {
    title: 'Basics in Java (Codetantra)',
    tags: ['Java', 'Codetantra'],
    description: 'Java fundamentals and object-oriented programming concepts.',
    date: 'Sep - 2023',
    link: 'https://drive.google.com/file/d/1HgbQL_TKqk7BmQ5EHpl1-krcYy_tSy9f/view?usp=sharing'
  },
];
const others = [
  {
    title: 'Smart India Hackathon 2023 | Finalist',
    tags: ['Hackathon', 'Flutter', 'Dart'],
    description: 'Built a wool supply chain monitoring app with a team of 6 at Bhopal SIH finals.',
    date: 'Dec - 2023',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7143954593490567168/'
  },
  {
    title: "Intra-Department Fest 'SRUJANFEST'22 | First Place",
    tags: ['Web Development', 'Portfolio'],
    description: 'Won 1st place for building an award-winning personal portfolio website.',
    date: 'June - 2022',
    link: 'https://drive.google.com/file/d/1svoSuOV3YaHBOALTt7ZRLkz21SSbaUa9/view?usp=sharing'
  },
  {
    title: 'Position of Responsibility | Joint Secretary',
    tags: ['Leadership', 'Position'],
    description: 'Joint Secretary of the Department of AI and Data Science at PSNACET.',
    date: '2022 – 2023',
    link: 'https://drive.google.com/file/d/1uKEaX27BKXWX9fpTLAqsa1DsN_NFpDoM/view?usp=sharing'
  }
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('Certifications');

  const renderAchievements = (items) =>
    items.map((item, index) => (
      <div className="achievement-card" key={index}>
        <h3>{item.title}</h3>
        <div className="tags">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="tag">{tag}</span>
          ))}
        </div>
        <p className="achievement-desc">{item.description}</p>
        <div className="achievement-footer">
          <span className="date">{item.date}</span>
          <a href={item.link} className="view-btn" target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
        </div>
      </div>
    ));

  return (
    <div className="achievements-section" id="achievements">
      <h2><span>Achieve</span>ments</h2>

      <div className="tabs">
        <button className={activeTab === 'Certifications' ? 'active' : ''} onClick={() => setActiveTab('Certifications')}>Certifications</button>
        <button className={activeTab === 'Others' ? 'active' : ''} onClick={() => setActiveTab('Others')}>Others</button>
      </div>

      <div className="achievements-grid">
        {activeTab === 'Certifications' ? renderAchievements(certifications) : renderAchievements(others)}
      </div>
    </div>
  );
};

export default Achievements;
