import React from 'react'
import './intro.css';
import bg from '../../assets/ojan2.jpg';
import { Link }  from 'react-scroll';
import btnImg from '../../assets/hireme.png'; 

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,<br></br></span>
            <span className="introText">I'm <span className="introName">Ojan Maharjan</span><br></br>Website Desinger</span>
        <p className="introPara">I am a skilled web Desinger and experience in creating <br></br>visual appealing and user friendly websites. </p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire me </button></Link>
        </div>
            <img src={bg} alt="Profile" className="bg" />
    </section>
  );
}

export default Intro;

