import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

// import { AppTitle, AppSubtitle, AppDesc } from "./components/styledComponents";
// import Fade from "react-reveal/Fade";
import ScrollAnimation from "react-animate-on-scroll";

import Navbar from "./components/Navbar.js";
import EnterButton from "./components/EnterButton";
import About from "./components/About.js";
import Works from "./components/Works.js";
import Contact from "./components/Contact.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="home" id="home">
          <header className="header">
            <Navbar />
            <div className="header-icons">
              <a href="https://github.com/RLPedro" target="_blank">
                <i className="fab fa-github github-icon"></i>
              </a>
              <a
                href="https://instagram.com/ricardoleitaopedro"
                target="_blank"
              >
                <i class="fab fa-instagram instagram-icon"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ricardoleitaopedro/"
                target="_blank"
              >
                <i class="fab fa-linkedin linkedin-icon"></i>
              </a>
              <br />
            </div>
            {/* <Fade top duration={3000}> */}
            <ScrollAnimation
              animateIn="fadeIn"
              // animateOut="fadeOut"
              duration={3}
            >
              <Link smooth to="home" style={linkStyle}>
                <h1 className="app__title">RICARDO LEITÃO PEDRO</h1>
              </Link>
            </ScrollAnimation>
            {/* </Fade> */}
          </header>
          <ScrollAnimation
            animateIn="fadeIn"
            // animateOut="fadeOut"
            duration={5}
          >
            <section className="app__presentation">
              {/* <Fade bottom duration={3000}> */}
              <h2 className="app__subtitle">PORTFOLIO</h2>
              {/* </Fade> */}
              {/* <Fade bottom duration={3000}> */}
              <h2 className="app__desc">full-stack web development</h2>
              {/* </Fade> */}
            </section>
          </ScrollAnimation>

          <EnterButton />
        </div>
        <ScrollAnimation
          animateIn="fadeIn"
          // animateOut="fadeOut"
          duration={3}
        >
          <About />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          // animateOut="fadeOut"
          duration={3}
        >
          <Works />
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          // animateOut="fadeOut"
          duration={3}
        >
          <Contact />
        </ScrollAnimation>
      </Router>
    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default App;
