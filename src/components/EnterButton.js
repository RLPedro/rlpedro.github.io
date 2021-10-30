import "./styles/EnterButton.css";
import { Link } from "react-scroll";

const EnterButton = () => {
  return (
    <div className="enter-button">
      <Link smooth to="works">
        <button>CHECK MY WORK</button>
      </Link>
    </div>
  );
};

export default EnterButton;
