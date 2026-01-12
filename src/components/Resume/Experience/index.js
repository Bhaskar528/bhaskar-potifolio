import ExperienceCard from "./experienceCard";
import "./index.css";


const experienceList = [
  {
    id: 1,
    year: "2025 – Present",
    role: "Fullstack Developer",
    description:
      "Capable full-stack developer with hands-on experience in HTML, CSS, JavaScript (frontend) and Python, SQL, Mongodb (backend) to build end-to-end web solutions."
  },
  {
    id: 2,
    year: "2023 – 2024",
    role: "Backend Developer",
    description:
      "Experienced in backend development using Python, SQL, and Mongodb with API integration and data handling."
  },
  {
    id: 3,
    year: "2022 – 2023",
    role: "Frontend Developer",
    description:
      "Skilled in frontend development using HTML, CSS, and basic JavaScript to build responsive and user-friendly interfaces."
  },
  {
    id: 4,
    year: "2021 – 2022",
    role: "UI/UX",
    description:
      "Experienced in designing clean, user-friendly interfaces with a focus on intuitive UX and responsive layouts."
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2 className="section-title">
        My <span>Experience</span>
        <p>
            I'm proactive, quick to learn, and focused on delivering real value.
            I take ownership, solve problems creatively, and continuously improve.
          </p>
      </h2>

      <div className="experience-grid">
        {experienceList.map((item) => (
          <ExperienceCard
            key={item.id}
            year={item.year}
            role={item.role}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
