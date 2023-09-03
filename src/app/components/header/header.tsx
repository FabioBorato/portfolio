import Image from 'next/image'
import ProfileImg from '../../../../public/Novo Projeto (1).png'
import "./header.scss"
import { FaEnvelope } from 'react-icons/fa';
import { SocialBtns } from '../social-btns/social-btns'
export function Header(){
  return(
    <div className="header">
    
          <div className='title-position center'>
            <h1>Olá, eu sou o Fábio! 👋</h1>
            <h2>Product Manager & Web Developer</h2>
          </div>

          <div className='center image-position'>
            <Image
              src={ProfileImg}
              alt="Vercel Logo"
              width={230}
              height={230}
              priority
            />
          </div>

          <div className=" bttn-position buttons">
          <SocialBtns/>
          <a className="btn-primary degrade-animado" href="mailto:fabioborato@gmail.com">
            entrar em contato
            <FaEnvelope/>
          </a>
        </div>

        </div>
    )
}