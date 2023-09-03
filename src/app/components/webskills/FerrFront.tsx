import "./Box.scss";
import { FaCheckCircle } from 'react-icons/fa';
import { SiJest, SiWebpack, SiBabel, SiHtml5, SiCss3, SiSass } from 'react-icons/si'; // Importe os ícones da biblioteca Simple Icons


export function FerrFront () {
  return (
    <div>
      <a className='flex-box'>
        <h2>Ferramentas Front-end:</h2>
      </a>
      <div className='align-flex'>
        <p><SiJest color="#CD6799" /> Jest</p>
        <p><SiWebpack color="#1C78C0" /> Webpack</p>
        <p><SiBabel color="#F9DC3E" /> Babel</p>
        <p><FaCheckCircle color="#F9DC3E" /> Regenerator</p>
        <p><SiHtml5 color="#E44D26" /> HTML5</p>
        <p><SiCss3 color="#2965F1" /> CSS3</p>
        <p><SiSass color="#CD6799" /> SCSS (SASS)</p>
      </div>
    </div>
  );
};
