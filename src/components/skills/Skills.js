import React from 'react';
import './Skills.css';
import { FaReact, FaPython, FaJava, FaDatabase, FaGitAlt, FaFileExcel,FaBrain,FaProjectDiagram,FaChartBar } from 'react-icons/fa';
import { SiFlutter, SiMysql, SiHtml5, SiCss3, SiJavascript, SiDart } from 'react-icons/si';


function Skills() {
  return (
    <div className="skills-container section" id="skills">
      <div className="skills-bg-animation">
  {Array.from({ length: 10 }).map((_, i) => (
  <span key={i}></span>
))}

</div>
      <div className="skills-content">
        <h2>Skills & <span>Tools</span></h2>
        <div className="skills-grid">
          <div className="skill-card"><FaReact /> <span>ReactJS</span></div>
<div className="skill-card"><SiFlutter /> <span>Flutter</span></div>
<div className="skill-card"><SiDart /> <span>Dart</span></div>
<div className="skill-card"><FaPython /> <span>Python</span></div>
<div className="skill-card"><FaJava /> <span>Java</span></div>
<div className="skill-card"><SiMysql /> <span>MySQL</span></div>
<div className="skill-card"><FaDatabase /> <span>SQL</span></div>
<div className="skill-card"><SiHtml5 /> <span>HTML5</span></div>
<div className="skill-card"><SiCss3 /> <span>CSS3</span></div>
<div className="skill-card"><SiJavascript /> <span>JavaScript</span></div>
<div className="skill-card"><FaFileExcel /> <span>Excel</span></div>
<div className="skill-card"><FaChartBar/><span>Power BI</span></div>
<div className="skill-card"><FaGitAlt /> <span>Git</span></div>
<div className="skill-card"><FaBrain /> <span>AI/ML</span></div>
<div className="skill-card"><FaProjectDiagram /> <span>Neural Netwoks(DL)</span></div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
