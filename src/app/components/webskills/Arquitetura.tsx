import "./Box.scss";
import { FaShapes, FaProjectDiagram, FaObjectGroup } from 'react-icons/fa';

export function Arqt(){
  return (
    <div>
      <a className='flex-box'>
        <h2>Arquitetura e Design:</h2>
      </a>
      <div className='align-flex'>
        <p><FaShapes color="#8400ff" /> SOLID</p>
        <p><FaProjectDiagram color="#8400ff" /> UML Diagramas</p>
        <p><FaObjectGroup color="#8400ff" /> Design Patterns</p>
      </div>
    </div>
  );
};

