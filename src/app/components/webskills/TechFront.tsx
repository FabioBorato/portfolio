import "./Box.scss";
import { FaJs, FaLaptopCode, FaProjectDiagram, FaObjectGroup } from 'react-icons/fa'; // Importe os ícones que deseja usar
import { SiHtml5, SiCss3, SiSass } from "react-icons/si";
export function TechFront() {
  return (
    <div className="center">
      <a className='flex-box'>
        <h2>Tecnologias Front-end</h2>
      </a>
      <div className='align-flex'>
        <p><SiHtml5 color="#E44D26" /> HTML5</p>
        <p><SiCss3 color="#2965F1" /> CSS3</p>
        <p><SiSass color="#CD6799" /> SCSS (SASS)</p>
        <p><FaJs color="#f0db4f" /> ES6 Modules</p>
        <p><FaProjectDiagram color="#8400ff" /> Redux Saga</p>
        <p><FaObjectGroup color="#8400ff" /> Axios</p>
      </div>
    </div>
  );
};

