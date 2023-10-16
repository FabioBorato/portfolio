import "./Box.scss";
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export function FrameWorks() {
  return (
    <div>
      <a className='flex-box'>
        <h2>Frameworks & Libraries</h2>
      </a>
      <div className='align-flex'>
      <p><FaReact color="#61dafb" /> React</p>
          <p><FaAngular color="#dd1b16" /> Angular</p>
          <p><SiNextdotjs color="#000000" /> Next.js</p>
      </div>
    </div>
  );
};
