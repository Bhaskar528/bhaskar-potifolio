import "./index.css";

const ExperienceCard = ({ year, role, description }) => {
  return (
    <div className="experience-card">
      <h4 className="experience-year">{year}</h4>
      <h3 className="experience-role">{role}</h3>
      <p className="experience-desc">{description}</p>
    </div>
  );
};

export default ExperienceCard;