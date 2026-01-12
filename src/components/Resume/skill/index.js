import "./index.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiPostgresql } from "react-icons/si";

const skillsList = [
  { id: 1, name: "HTML5", icon: <FaHtml5 /> },
  { id: 2, name: "CSS3", icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", icon: <FaJs /> },
  { id: 4, name: "React.js", icon: <FaReact /> },
  { id: 5, name: "Node.js", icon: <FaNodeJs /> },
  { id: 6, name: "Python", icon: <FaPython /> },
  { id: 7, name: "MongoDB", icon: <SiMongodb /> },
  { id: 8, name: "PostgreSQL", icon: <SiPostgresql /> },
  { id: 9, name: "Git", icon: <FaGitAlt /> },
  { id: 10, name: "Figma", icon: <FaFigma /> },
];

const Skills = () => {
  return (
    <div className="skills-section fade-in">
      <h2 className="skills-title">
        My <span>Skills</span>
      </h2>

      <p className="skills-desc">
        I am proficient in modern frontend and backend technologies used to
        build scalable, high-performance web applications.
      </p>

      <div className="skills-grid">
        {skillsList.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
