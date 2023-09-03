import React from 'react';
import "./Box.scss";
import { FaJs } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
export function Linguagens () {
  return (
    <div>
      <a className='flex-box'>
        <h2>Linguagens de Programação</h2>
      </a>
      <div className='align-flex'>
        <p><SiTypescript color="#3178C6" font-size="16px" /> TypeScript</p>
        <p><FaJs color="#f0db4f" font-size="18px" /> JavaScript</p>
      </div>
    </div>
  );
};

