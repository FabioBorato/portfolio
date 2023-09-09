import "./Box.scss";
import { SiNodedotjs, SiExpress, SiMongodb, SiMariadb, SiMysql, SiAmazonaws } from 'react-icons/si'; // Importe os ícones da biblioteca Simple Icons


export function TechBack () {
  return (
    <div>
      <a className="flex-box">
        <h2>Tecnologias Back-end</h2>
      </a>
      <div className="align-flex">
        <p><SiNodedotjs color="#68a063" /> Node.js</p>
        <p><SiMongodb color="#68a063" /> MongoDB</p>
        <p><SiMariadb color="#6371a0" /> MariaDB</p>
        <p><SiMysql color="#ec9e27" /> MySQL</p>
        <p><SiExpress color="#353535" /> Express</p>
        <p><SiAmazonaws color="##232F3E" /> AWS</p>
      </div>
    </div>
  );
};