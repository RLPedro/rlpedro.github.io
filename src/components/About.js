import "./styles/About.css";
import RLP from "../imgs/RLP.png";
// import { AboutMeArticle, ProfilePhoto } from "./styledComponents";
import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="tech">
        <p className="tech__title">TECH STACK</p>
        <p className="tech__languages-title">Languages:</p>
        <p className="tech__languages">JavaScript, TypeScript, Python</p>
        <article className="tech__text">
          <div className="tech__frontend">
            <p className="tech__frontend-title">Front-end</p>
            <div className="tech__frontend-list">
              <p className="tech__frontend-list-item">HTML5</p>
              <p className="tech__frontend-list-item">CSS3, SASS</p>
              <p className="tech__frontend-list-item">React</p>
              <p className="tech__frontend-list-item">Redux</p>
            </div>
          </div>
          <div className="tech__backend">
            <p className="tech__backend-title">Back-end</p>
            <div className="tech__backend-list">
              <p className="tech__frontend-list-item">NodeJS</p>
              <p className="tech__frontend-list-item">ExpressJS</p>
              <p className="tech__frontend-list-item">REST, GraphQL</p>
              <p className="tech__frontend-list-item">MongoDB, Mongoose</p>
              <p className="tech__frontend-list-item">PostGreSQL</p>
            </div>
          </div>
        </article>
        <div className="tech__tools">
          <p className="tech__tools-title">Tools and skills</p>
          <p>GIT, GitHub</p>
          <p>Test-driven development</p>
          <p>Agile</p>
        </div>
      </div>
      {/* <AboutMeArticle className="about__text"> */}
      {/* <Fade left duration={3000}> */}
      <article className="about__text">
        <p className="about__title">ABOUT ME</p>
        <p>
          I am a classical musican by formation but discovered a passion for
          coding while in lockdown during the first wave of the 2020 global
          pandemic.
          <br />I discovered that the art of programming has many parallels to
          the musical craft I was used to, while allowing me to expand my
          knowledge of today's state-of-the-art technology and develop the
          skills to build attractive products from the ground up.
          <br />
          <br />
          After a period of self-learning, I succefully applied and graduated
          from possibly the thoughest programming bootcamp in the world(!):{" "}
          <br />
          <a href="https://salt.study/" target="_blank" className="salt-link">
            SALT
          </a>{" "}
          (&lt;/salt&gt;)'s Javascript Full-stack course.
          <br />
          <br />
          Since then, I work as a professional programmer for the web.
        </p>
        {/* </AboutMeArticle> */}
      </article>
      {/* // </Fade> */}
      {/* // <Fade right duration={3000}> */}
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={3}>
        {/* <ProfilePhoto src={RLP} className="RLP" /> */}
        <img src={RLP} className="RLP" />
        {/* // </Fade> */}
      </ScrollAnimation>
    </div>
  );
};

export default About;
