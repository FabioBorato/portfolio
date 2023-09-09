
import "./about.scss"
import Link from 'next/link';
import { SiOpenstreetmap } from "react-icons/si";

export function About(){

    return(
        <div>
            <h2 className="text-degrade title-flex">Sobre mim</h2>
            <ul className="re-size">
                <p> Minha trajetória é um reflexo de minha sede constante por desafios, aprendizados e transformações. De um jovem apaixonado por web design a um versátil Product Manager e Desenvolvedor Web. Minhas raízes em Web Design se transformaram em uma afinada maestria em marketing digital, onde pude conduzir campanhas impactantes ao longo da minha jornada, da qual me levou para caminhos dos quais tive o privilégio de me apaixonar por diversas vezes e criar hiperfoco em cima delas:</p>
                <br/><p>A <strong>Psicologia</strong>, quando buscava compreender a mente humana.</p>
                <br/><p>O <strong>Marketing</strong>, quando buscava construir na mente humana a ideia sobre algo, levando como base a sua compreensão.</p>
                <br/><p>Pelas <strong>Empresas</strong>, quando buscava ofertar produtos para as dores daquele mercado, levando como base a sua consciência sobre.</p>
                <br/><p>Pelo <strong>Mercado Financeiro</strong>, quando buscava rentabilidade, levando como base uma profunda compreensão de oferta e demanda.</p>
                <br/><p>Por último, o <strong>Mercado de Tecnologia</strong>, quando buscava criar soluções para problemas não resolvidos, levando como base as dores da demanda.</p>
                <br/><p> Hoje retorno ao mundo tech, trazendo comigo uma bagagem rica e eclética, pronta para enfrentar desafios com uma perspectiva renovada. Minha história é uma fusão de resiliência, aprendizados contínuos e uma incansável busca por transformação.</p>
                <br/><p> Estou empolgado para descobrir qual será a próxima empresa que ajudarei a transformar, e talvez, ela possa ser a sua. Para que possa analisar melhor o meu perfil, eu separei para você um espaço que vai te ajudar a identificar melhor esses aspectos, basta clicar no botão abaixo.</p>
            </ul>
            <div className="flex">
                <Link className="btn-primary degrade-animado" href='../../carreira'>
                Minha jornada
                <SiOpenstreetmap/>
                </Link>
            </div>
        </div>
    )
}