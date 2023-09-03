import "./Box.scss";
import { FaJs, FaLaptopCode, FaProjectDiagram, FaObjectGroup } from 'react-icons/fa'; // Importe os ícones que deseja usar

export function TechFront() {
  return (
    <div className="center">
      <a className='flex-box'>
        <h2>Tecnologias Front-end</h2>
      </a>
      <div className='align-flex'>
        <p><FaJs color="#f0db4f" /> Core JS</p>
        <p><FaJs color="#f0db4f" /> ES6 Modules</p>
        <p><FaJs color="#f0db4f" /> Regex</p>
        <p><FaProjectDiagram color="#8400ff" /> Redux Saga</p>
        <p><FaObjectGroup color="#8400ff" /> Axios</p>
        <p><FaLaptopCode color="#f0db4f" /> Regex</p>
      </div>
    </div>
  );
};

