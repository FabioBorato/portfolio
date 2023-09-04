import { SiDocker, SiInsomnia, SiGithub, SiEslint, SiPrettier, SiVisualstudiocode } from 'react-icons/si'; // Importe os ícones da biblioteca Simple Icons
import "./Box.scss";
export function FerrBack(){
  return (
    <div>
      <a className='flex-box'>
        <h2>Ferramentas Back-end</h2>
      </a>
      <div className='align-flex'>
        <p><SiDocker color="#0DB7ED" /> Docker</p>
        <p><SiInsomnia color="#5849BE" /> Insomnia</p>
        <p><SiGithub color="#181717" /> Git & GitHub</p>
        <p><SiEslint color="#4B32C3" /> ESLint</p>
        <p><SiPrettier color="#F7B93E" /> Prettier</p>
        <p><SiVisualstudiocode color="#007ACC" /> Visual Studio Code</p>
      </div>
    </div>
  );
};
