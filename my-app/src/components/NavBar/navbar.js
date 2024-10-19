
import React  from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link }  from 'react-scroll';
function Navbar () {
  
  return (
    <nav className="navbar">
      <img src ={logo} alt ="logo" className='logo'/>
       
        <div className="desktopMenu">
         <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
         <Link  activeClass='active' to='SkillsTitle' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
         <Link  activeClass='active' to='works' spy={true} smoooth={true} offset={-80} duration={500} className='desktopMenuListItem'>Portfolio</Link>
         <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-120} duration={500} className='desktopMenuListItem'>Clients</Link>
        </div>
          <button className="desktopMenuBtn"
          onClick={()=>{
            document.getElementById('contacts').scrollIntoView({behavior: 'smooth'}); 
          }}>
          
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button> 

    </nav>
  )
}

export default Navbar;



