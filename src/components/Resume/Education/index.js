import "./index.css";
import EducationCard from "./EducationCard";

const educationList = [
  {
    id: 1,
    year: "2025 - Present",
    title: "React Js",
    institute: "NxtWave",
    description:
      "I've learned core React.js concepts like components, JSX, state management, React Hooks, React Router, and context API for building interactive and scalable UIs.",
  },
  {
    id: 2,
    year: "2023 - 2024",
    title: "JavaScript",
    institute: "NxtWave",
    description:
      "Strong foundation in JavaScript including ES6+, DOM manipulation, async programming, and problem-solving techniques.",
  },
  {
    id: 3,
    year: "2023 - 2024",
    title: "Python, SQL",
    institute: "NxtWave",
    description:
      "Hands-on experience with Python fundamentals, data handling, SQL queries, and backend logic building.",
  },
  {
    id: 4,
    year: "2023",
    title: "HTML, CSS",
    institute: "NxtWave",
    description:
      "Learned building responsive layouts using HTML5, CSS3, Flexbox, Grid, and modern UI design principles.",
  },
];

const Education = () => {
  return (
    <div className="education-right">
      <h2 className="education-heading">
        My <span>Education</span>
      </h2>

      <p className="education-desc">
        I'm 4th year of B.Tech in Computer Science and Engineering (IoT). I focus
        on building clean, responsive, and user-friendly applications with
        strong fundamentals.
      </p>

      <div className="education-cards">
        {educationList.map((item) => (
          <EducationCard key={item.id} details={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
