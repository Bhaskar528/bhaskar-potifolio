import "./index.css";
import ProjectCard from "./ProjectCard";

const projectsList = [
  {
    id: 1,
    number: "01",
    title: "Category Dashboard",
    description:
      "I recently built a category dashboard website using React JS, Node JS, MongoDB, and Express JS, featuring a login,sign up, clean design, and smooth navigation to showcase clothes categories and menus effectively.",
    tech: "REACT JS,NODE JS, MONGODB, EXPRESS JS",
    image:
      "https://res.cloudinary.com/dvcgbrkoj/image/upload/v1768216022/Screenshot_2026-01-09_232220_thkci2.png",
    liveUrl: "https://category-management-dashboard-jyz6.vercel.app",
    githubUrl: "https://github.com/Bhaskar528/category-management-dashboard",
  },
  {
    id: 2,
    number: "02",
    title: "Info Hub",
    description:
      "I recently built a Info Hub website using React JS, CSS, Bootstrap, Node JS, and Express JS, featuring a responsive layout, clean design, and smooth navigation to showcase categories and menus effectively.",
    tech: "REACT JS, CSS, BOOTSTRAP,NODE JS, EXPRESS JS",
    image:
      "https://res.cloudinary.com/dvcgbrkoj/image/upload/v1768216318/Screenshot_2025-11-07_130043_hulyyn.png",
    liveUrl: "https://info-project-iota.vercel.app/",
    githubUrl: "https://github.com/Bhaskar528/info-project",
  },
  {
    id: 3,
    number: "03",
    title: "Dental Care",
    description:
      "I built a Dental care website using HTML and CSS, featuring a responsive layout, clean design, and smooth navigation to showcase categories and menus effectively.",
    tech: "HTML, CSS, BOOTSTRAP",
    image:
      "https://res.cloudinary.com/dvcgbrkoj/image/upload/v1768216832/Screenshot_2025-12-01_173243_lako2m.png",
    liveUrl: "https://my-landing-page-chi-coral.vercel.app/",
    githubUrl: "https://github.com/Bhaskar528/my-landing-page",
  },
  {
    id: 4,
    number: "04",
    title: "Bhaskar Realmart dashboard",
    description:
      "I recently built a Bhaskar Realmart dashboard website using Power BI, featuring a dynamic layout, clean design, and smooth navigation to showcase categories and menus effectively.",
    tech: "POWER BI",
    image:
      "https://res.cloudinary.com/dvcgbrkoj/image/upload/v1768216371/Screenshot_2025-12-13_160238_bevnrh.png",
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiODlmNmU5MWItMzY0Mi00ZTZiLTlhYjQtMGM1ZDBlOGVhZjA4IiwidCI6ImNiYTJmNGQ1LTk0YWYtNDNlZC04MjVlLTM0ZDNlNjE0NDdmMyJ9",
    githubUrl: "https://github.com/Bhaskar528/Bhaskar-RealMart-Dashboard",
  },
  {
    id: 5,
    number: "05",
    title: "Tourist Website",
    description:
      "I recently built a Tourist Website using HTML and CSS, featuring a responsive layout, clean design, and smooth navigation to showcase places categories and menus effectively.",
    tech: "HTML, CSS, BOOTSTRAP",
    image:
      "https://res.cloudinary.com/dvcgbrkoj/image/upload/v1701363719/Taj_Mahal_india_image_ptjc3g.jpg",
    liveUrl: "https://bhaskartourist.ccbp.tech/",
    githubUrl: "https://github.com/your-repo",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">
        Latest <span>Project</span>
      </h2>

      {projectsList.map((project) => (
        <ProjectCard key={project.id} data={project} />
      ))}
    </section>
  );
};

export default Projects;
