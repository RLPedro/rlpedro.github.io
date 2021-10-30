import "./styles/Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link smooth to="about" style={linkStyle}>
        <h3 className="navbar__item">about me</h3>
      </Link>
      <Link smooth to="works" style={linkStyle}>
        <h3 className="navbar__item">works</h3>
      </Link>
      <Link smooth to="contact" style={linkStyle}>
        <h3 className="navbar__item">contact</h3>
      </Link>
    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Navbar;
