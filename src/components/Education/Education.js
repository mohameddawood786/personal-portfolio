import React, { useEffect, useRef } from 'react';
import './Education.css';
import { Briefcase, GraduationCap } from 'lucide-react';
const educationData = [
  {
    title: 'Secondary School Education (SSLC) - 93.8%',
    subtitle: 'Annamalaiyaar Matric Hr Sec School - Madurai',
    date: '2018 - 2019',
    side: 'right',
    type: 'education',
    link:'https://drive.google.com/file/d/1sDgxSbzXvG1mZXnWmvxd7pIV4lL1gozr/view?usp=sharing'
  },
  {
    title: 'Higher Secondary Education (HSC) - 93.5%',
    subtitle: 'Annamalaiyaar Matric Hr Sec School - Madurai',
    date: '2020 - 2021',
    side: 'left',
    type: 'education',
    link:'https://drive.google.com/file/d/1sDgxSbzXvG1mZXnWmvxd7pIV4lL1gozr/view?usp=sharing'
  },
  {
    title: 'B.TECH AIDS | CGPA - 7.98',
    subtitle: 'PSNA College of Engg & Tech, Dindigul',
    date: '2021 - 2025',
    side: 'right',
    type: 'education',
    link:'https://drive.google.com/file/d/1rDTMHZJw6MOQfl7tsaepZaiejsihTRAM/view?usp=sharing'
  },
  {
    title: 'Team Tweaks | Application Developer Intern',
    subtitle: 'Chennai',
    date: 'June 2023 - July 2023',
    side: 'left',
    type: 'experience',
    link:'https://drive.google.com/file/d/1PPNoE66oYmRDvFsR94GHyemsz5EKha26/view?usp=sharing'
  },
  {
    title: 'Innobyte Services | Data Analyst Intern',
    subtitle: 'Remote',
    date: 'Aug 2024 - Sep 2024',
    side: 'right',
    type: 'experience',
    link:'https://drive.google.com/file/d/1dJQik5Own5GA-5-soCY7dKhJI4Q-OFcf/view?usp=sharing'
  }
];


const Education = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.2
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="education-section" id="experience">
      <h2 className="education-title">
        Education & <span>Experience</span>
      </h2>
      <div className="education-container">
        <div className="education-line"></div>
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`education-item ${item.side}`}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            <div className="education-icon">
              {item.type === 'education' ? (
                <GraduationCap size={18} color="#f7e851" />
              ) : (
                <Briefcase size={18} color="#f7e851" />
              )}
            </div>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="education-content"
              >
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="education-date">{item.date}</span>
              </a>
            ) : (
              <div className="education-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                <span className="education-date">{item.date}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
