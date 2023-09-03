import React from 'react';
import { SectionTitle } from '../sectionTitle/section-title';
import './information.scss';
import Image from 'next/image'
import BR from './bandeiras/BR.svg'
import EUA from './bandeiras/EU.svg'


export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <p>
          <Image src={EUA} alt="USA Flag" width={38} height={38} /> EN - Fluente
        </p>
        <p>
          <Image src={BR} alt="Brazil Flag"  width={38} height={38} /> PT-BR - Nativo
        </p>
      </div>
    </div>
  );
}
