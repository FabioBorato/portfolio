import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importe os ícones da biblioteca React Icons
import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a href="https://www.instagram.com/borattow/">
        <FaInstagram className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/in/fábio-borato-41248a114">
        <FaLinkedin className="social-icon" />
      </a>
      <a href="https://github.com/FabioBorato">
        <FaGithub className="social-icon" />
      </a>
    </div>
  );
}
