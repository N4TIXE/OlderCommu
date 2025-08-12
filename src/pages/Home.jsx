import React from 'react'
import logo from "../../public/OlderCommuLOGO.png"
import "../../public/nikeAirShoe.png"
import './Home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  //leftMenu ไว้เลือกเกม  เเละมี Animation ตรง Box-Content เวลากด
  const [imageMenu,setImageMenu] = useState("../../public/nikeAirShoe.png");
  const [animationKey, setAnimationKey] = useState(0);
  const slider = (anything) => {
    setImageMenu(anything); //ไว้เปลี่ยน Game ที่เลือก
    setAnimationKey((reAnimation) => reAnimation + 1); //เวลากดจะได้มี Animation ซั้า
  };

  // เปลี่ยนข้อมูล Hero : Game , Info , Price , Status ของเกม
  const [changeName,useChangeName] = useState('Nike air force 1');
  const [changeInfo,useChangeInfo] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem reprehenderit a quae consectetur, accusantium veritatis quidem, aperiam asperiores velit qui dolorem non, ea maiores quaerat neque fugit corporis expedita.');
  const [changePrice,useChangePrice] = useState('$Free')
  const [changeStatus,useChangeStatus] = useState('Start Game')
  const changeNameGame = (input) =>{
    useChangeName(input);
  }
  const changeInfoGame = (input) =>{
    useChangeInfo(input);
  } 
  const changePriceGame = (price,status) =>{
    useChangePrice(price);
    useChangeStatus(status);
  }

  //MenuHamburger บนขวา
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //ไว้สลับค่า True กับ False
  };
  const menuOpen = isMenuOpen ? 'bx-x': "";
  const navOpen = isMenuOpen ? 'open': "";

  //return คือที่จะเเสดงผลในเว็บ
  return (
    <div>
      <header>
        {/*Logo*/}
        <a href="#" className='logo' data-aos='flip-left' data-aos-duration='1500'>
          <img src={logo} alt=""/>
        </a>
        {/*Menu*/}
        <ul className={`nav ${navOpen}`} >
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/Game1' >Store</Link></li>
          <li><Link to='/Game2' >Contact</Link></li>
          <li><Link to='/' >About Us</Link></li>
        </ul>
        {/*Menu-Right*/}
        <div className="nav-right" data-aos='flip-left' data-aos-duration='1000'>
          <Link to='/'><i class="ri-search-line"></i></Link>
          <Link to='/'><i class="ri-shopping-cart-line"></i></Link>
          <Link to='/Register'><i class="ri-user-line"></i></Link>
          <div className={`bx bx-menu ${menuOpen}`} id='menu-icon' onClick={toggleMenu}></div>
        </div>
      </header>
      {/*Section*/}
      <section key={animationKey} className="hero" >
        <div className="hero-img" data-aos='zoom-in' data-aos-duration='2000'>
          <img src={imageMenu} alt="Nike Air Force 1" className="one"/>
        </div>
        {/*ส่วนของ Hero*/}
        <div className="hero-text">
          <h1 data-aos='fade-right' data-aos-duration='1500'>{changeName}</h1>
          <p data-aos='fade-right' data-aos-duration='1500' >{changeInfo}</p>
          <h5 data-aos='zoom-in' data-aos-duration='1400'>{changePrice}</h5>
          <div className="hero-btnn" data-aos='flip-down' data-aos-duration='800' data-aos-delay='200'>
            <a href="#" className="btn">{changeStatus}</a>
            <a href="#" className="btn2">View details</a>
          </div>
        </div>
      </section>
      {/*Menu ซ้าย*/}
      <div className="content">
        <div className="box" data-aos='zoom-in-right' data-aos-duration='1500'>
          <li><img src="../../public/nikeAirShoe.png" alt="" onClick={() => {slider('../../public/nikeAirShoe.png'),changeNameGame('Motese'),changePriceGame('$Free','Start Game'),changeInfoGame("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, facilis eum? Est debitis harum earum atque totam. Distinctio nobis quibusdam ab aspernatur explicabo consequuntur sequi dolorum? Neque aut suscipit alias!");}}/></li>
        </div>

        <div className="box" data-aos='zoom-in-right' data-aos-duration='1500'>
          <li><img src="../../public/ComingSoon.png" alt="" onClick={() => {slider('../../public/ComingSoon.png'),changeNameGame('Coming soon...'),changePriceGame('Sold out','Coming Soon...'),changeInfoGame('ในอนาคตพวกเราจะมีนวัตกรรมใหม่ๆ หรือวิดีโอเกมเจ๋งๆ รอพวกคุณมารอเล่นกันอยู่นะ โปรดติดตามรับชมผลงานในอนาคตของพวกเราทั้ง 3 คนด้วยนะครับ🐤')}}/></li>
        </div>

        <div className="box" data-aos='zoom-in-right' data-aos-duration='1500'>
          <li><img src="../../public/ComingSoon.png" alt="" onClick={() => {slider('../../public/ComingSoon.png'),changeNameGame('Coming soon...'),changePriceGame('Sold out','Coming Soon...'),changeInfoGame('ในอนาคตพวกเราจะมีนวัตกรรมใหม่ๆ หรือวิดีโอเกมเจ๋งๆ รอพวกคุณมารอเล่นกันอยู่นะ โปรดติดตามรับชมผลงานในอนาคตของพวกเราทั้ง 3 คนด้วยนะครับ🐤')}}/></li>
        </div>
      </div>

      <a href="#" className="scroll" data-aos='zoom-in-left' data-aos-duration='1500'><i class="ri-scroll-to-bottom-line"></i></a>

    </div>

  )
}

export default Home