import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
   <section className='skills'>
        <span className='SkillsTitle'> What I do</span>
        <span className='Skillsdesc'> I am a skilled web Desinger and experience in creating visual appealing and user friendly websites. I have a strong understanding of design and a keen eye for detail. I am  proficient HTML CSS, and Javasvript, as well as desing software such as Adoble photoshop and Illstration</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign"  className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p> This is demo text, you can write your own content here</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign"  className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Demo can be change while making the production ready website</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign"  className='skillBarImg'/>
                <div className="skillBarText">
                    <h2>App Design </h2>
                    <p>You can write text related to mobile app development </p>
                </div>
            </div>
            
        </div>
   </section>
  )
}

export default Skills;
