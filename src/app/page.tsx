import { Header } from './components/header/header'
import { Info } from './components/information/information'
import "./styles/home.scss"
import { EmailIcon } from './components/icons/email-icon'
import { SocialBtns } from './components/social-btns/social-btns'
import { About } from "./components/about/about";



export default function Home() {
  return (
    <main>
      <div className="box">

        <div className='container'>
          
          <div className='h-position'>
            <Header/>   
          </div>
          <div className='a-position'>
            <About/>
          </div>
          <div className='i-position'>
            <Info/>
          </div>
          <div>
          </div>

        </div>

        

      </div>
    </main>
  )
}
