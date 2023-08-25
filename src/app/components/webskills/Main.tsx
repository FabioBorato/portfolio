import './Box.scss';

import Linguagens from './Frameworks';
import FrameWorks from './FerrFront';
import Arqt from './Arquitetura.jsx';
import TechFront from './TechBack';
import TechBack from './Linguagens';
import FerrFront from './FerrBack.jsx';
import FerrBack from './FerrBack.jsx';

export function Webskills (){
    return(
        <div className='formate'>

            <div><Linguagens/></div>
            <div><FrameWorks/></div>
            <div><Arqt/></div>
            <div><TechFront/></div>
            <div><TechBack/></div>
            <div><FerrFront/></div>
            <div><FerrBack/></div>

        </div>
    )
}