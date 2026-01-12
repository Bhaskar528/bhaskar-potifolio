const EducationCard = ({ details }) => {
  const { year, title, institute, description } = details;

  return (
    <div className="education-card">
      <span className="education-year">{year}</span>

      <h3 className="education-title">{title}</h3>

      <div className="education-institute">
        <span className="dot"></span>
        <p>{institute}</p>
      </div>

      <p className="education-text">{description}</p>
    </div>
  );
};

export default EducationCard;
