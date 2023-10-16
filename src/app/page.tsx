import { Header } from './components/header/header'
import { Info } from './components/information/information'
import "./styles/home.scss"
import { About } from "./components/about/about";
import { Webskills } from './components/webskills/Main'


export default function Home() {
  return (
    <main>
      <div className="box">

        <div className='container'>
          
          <div className='h-position'>
            <Header/>   
          </div>
          <div className='i-position'>
            <Info/>
          </div>
          <div className='a-position'>
            <About/>
          </div>
          <div className='w-position'>
            <Webskills/>
          </div>

        </div>
      </div>
      <a className='footer'></a>
    </main>
  )
}
