import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section className='skills'>
      <span id = "about" className='skillsTitle'>What I Do</span>
      <span className='skillsDesc'>
        I am a full-stack web developer experienced in building modern web applications using Django, React.js, and RESTful APIs. I focus on writing clean, maintainable code and creating responsive, user-friendly interfaces.
      </span>

      <div className='skillBars'>
        <div className='skillBar'>
          <div className='skillBarText'>
            <h2>Frontend Development</h2>
            <p>React.js, JavaScript, HTML, CSS, Tailwind CSS, Responsive Design</p>
          </div>
        </div>

        <div className='skillBar'>
          <div className='skillBarText'>
            <h2>Backend Development</h2>
            <p>Django, Django REST Framework, PostgreSQL, SQLite, JWT Authentication, API Development</p>
          </div>
        </div>

        <div className='skillBar'>
          <div className='skillBarText'>
            <h2>Tools & Technologies</h2>
            <p>Git, GitHub, VS Code, Postman, DBeaver,  Jaccard Recommendation System</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
