import "./index.css";
import ServiceCard from "./serviceCard";

export const servicesList = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Crafting modern, responsive websites tailored for user engagement and performance.",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    active: false,
  },
  {
    id: 2,
    title: "UI/UX",
    description:
      "Designing intuitive interfaces that delight users and simplify digital experiences.",
    icon: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    active: false,
  },
  {
    id: 3,
    title: "Graphic Designer",
    description:
      "Creating visual identities through logos, banners, and stunning brand materials.",
    icon: "https://cdn-icons-png.flaticon.com/512/1829/1829564.png",
    active: false,
  },
  {
    id: 4,
    title: "SEO",
    description:
      "Boosting online visibility and search rankings through smart optimization.",
    icon: "https://cdn-icons-png.flaticon.com/512/751/751463.png",
    active: false,
  },
  {
    id: 5,
    title: "Video Editing",
    description:
      "Transforming raw footage into cinematic stories for brands and creators.",
    icon: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
    active: false,
  },
  {
    id: 6,
    title: "Photography",
    description:
      "Capturing moments with creativity – from portraits to product shots.",
    icon: "https://cdn-icons-png.flaticon.com/512/685/685655.png",
    active: false,
  },
];


const Services = () => {
  return (
    <section className="services-section" id="service">
      <h2 className="services-title">
        My <span>Services</span>
      </h2>

      <div className="services-grid">
        {servicesList.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            active={service.active}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
