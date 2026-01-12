import "./index.css";
// import profileImg from "../../assests/images/profile.png";

const Hero = () => {
  return (
    <section className="hero-container" id="home">
      <div className="hero-left">
        <h1 className="hero-name">Bhaskar C</h1>

        <h2 className="hero-role">
          I'm a <span>Full Stack Developer</span>
        </h2>

        <p className="hero-desc">
          with hands-on expertise in Python,
          HTML, CSS, SQL,Power BI and MongoDB.
        </p>
      </div>

      <div className="hero-right">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/dvcgbrkoj/image/upload/v1768218965/IMG_4632_arnits.jpg" alt="profile" />
          <span className="ring ring-1"></span>
          <span className="ring ring-2"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
