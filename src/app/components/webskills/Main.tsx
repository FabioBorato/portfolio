import './Box.scss';

import {Linguagens}  from './Linguagens';
import { FrameWorks } from './Frameworks';
import { Arqt } from './Arquitetura';
import { TechFront } from './TechFront';
import { TechBack } from './TechBack';
import { FerrFront } from './FerrFront';
import { FerrBack } from './FerrBack';


export function Webskills (){
    return(
        <div className='grid'>

            <div className='ling-r1'><Linguagens/></div>
            <div className='frmwrk-r1'><FrameWorks/></div>
            <div className='arqt-r1'><Arqt/></div>
            <div className='TF-r2'><TechFront/></div>
            <div className='TB-r2'><TechBack/></div>
            <div className='FF-r3'><FerrFront/></div>
            <div className='FB-r3'><FerrBack/></div>

        </div>
    )
}