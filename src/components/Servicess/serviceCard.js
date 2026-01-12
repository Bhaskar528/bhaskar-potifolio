const ServiceCard = ({ icon, title, description, active }) => {
  return (
    <div className={`service-card ${active ? "active" : ""}`}>
      <img src={icon} alt={title} className="service-icon-img" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
