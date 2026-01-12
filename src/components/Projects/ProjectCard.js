const ProjectCard = ({ data }) => {
  const { number, title, description, tech, image, liveUrl, githubUrl } = data;

  return (
    <div className="project-container">
      {/* LEFT */}
      <div className="project-left">
        <h1 className="project-number">{number}</h1>
        <h2 className="project-title">{title}</h2>

        <p className="project-desc">{description}</p>

        <p className="project-tech">{tech}</p>

        <div className="project-buttons">
          <a href={liveUrl} target="_blank" rel="noreferrer">
            ↗
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            github
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="project-right">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
