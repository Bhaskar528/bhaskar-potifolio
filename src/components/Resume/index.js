import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./skill";
import About from "./About";
import "./index.css";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const renderSection = () => {
    switch (activeSection) {
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      default:
        return <Experience />; // default
    }
  };

  return (
    <section className="resume-section">
      <div className="resume-container">

        {/* LEFT SIDE */}
        <div className="resume-left">
          <h2 className="resume-title">Why Hire Me?</h2>
          <p className="resume-desc">
            I'm proactive, quick to learn, and focused on delivering real value.
            I take ownership, solve problems creatively, and continuously improve.
          </p>

          <div className="resume-tabs">
            <Tab
              label="Experience"
              active={activeSection === "experience"}
              onClick={() => setActiveSection("experience")}
            />
            <Tab
              label="Education"
              active={activeSection === "education"}
              onClick={() => setActiveSection("education")}
            />
            <Tab
              label="Skills"
              active={activeSection === "skills"}
              onClick={() => setActiveSection("skills")}
            />
            <Tab
              label="About Me"
              active={activeSection === "about"}
              onClick={() => setActiveSection("about")}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="resume-right fade-in">
          {renderSection()}
        </div>

      </div>
    </section>
  );
};

const Tab = ({ label, active, onClick }) => (
  <button
    className={`tab ${active ? "active" : ""}`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Resume;