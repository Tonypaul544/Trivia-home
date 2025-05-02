

import './header.css';
import Avatar from './images/Avatar.png';
import Sirlcle1 from './images/sircle1.png';
import Sirlcle2 from './images/Group (3).png';
import Logo from './images/Logo.png';
export default function Header() {
  return (
    <header className='navBar'>
      <div className="logocontainer">
        <img src={Logo} alt="Logo" className="logo" />
      </div>

      <div className="rightNav">

        <div className="sircle1div">
        </div>

        <div className="pointsDiv">
          <div className="round">
            <div className="img">
              <img src={Sirlcle1} alt="" className='shift' />
              <img src={Sirlcle2} alt="" className='shift' id='goleft' />
              <h3 className="points">15000</h3>
            </div>
          </div>
        </div>
            <img src={Avatar} alt="" className='avatar' />
      </div>
    </header>
  )
}