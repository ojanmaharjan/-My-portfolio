// import React from 'react'
// import Portfolio1 from '../../assets/portfolio-1.png'
// import Portfolio2 from '../../assets/portfolio-2.png'
// import Portfolio3 from '../../assets/portfolio-3.png'
// import Portfolio4 from '../../assets/portfolio-4.png'
// import './Works.css'

// import Portfolio5 from '../../assets/portfolio-5.png'
// import Portfolio6 from '../../assets/portfolio-6.png'

// const Works = () => {
//   return (
//     <section id = 'works'>
//         <h2 className='worksTitle'>My Portfolio</h2>
//         <span className='worksDec'>I take pride in paying attentation to the smallest details and makeing sure that my work is pixel perfect.I am excited to bring my skills and experience to help business achieve their goals and create a strong online presence. </span>
//         <div className='worksImgs'>
//             <img src={Portfolio1} alt="Portfolio" className="worksImg" />
//             <img src={Portfolio2} alt="Portfolio" className="worksImg" />
//             <img src={Portfolio3} alt="Portfolio" className="worksImg" />
//             <img src={Portfolio4} alt="Portfolio" className="worksImg" />
//             <img src={Portfolio5} alt="Portfolio" className="worksImg" />
//             <img src={Portfolio6} alt="Portfolio" className="worksImg" />

//         </div>
//         <button className="workbtn">See more</button>

//     </section>
//   )
// }

// export default Works;

import React from 'react';
import './Works.css';
import foodOrdering from '../../assets/foodOrdering.png'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>

      <span className="worksDec">
        Here are some of the projects I've built using Django, React, and modern web technologies.
        I focus on clean code, functionality, and user experience.
      </span>

      <div className="worksImgs">
        <div className="projectCard">
          <img src={foodOrdering} alt="Food Ordering System" className="worksImg" />
          <div className="projectInfo">
            <h3>🍽️ Food Ordering System</h3>
            <p>
              Full-stack food ordering system using Django (backend) and React.js (frontend).<br />
              Includes user login with roles (Admin, Superuser, User) using JWT authentication.
            </p>
            <ul>
              <li>Developed REST APIs using Django REST Framework</li>
              <li>Used PostgreSQL for storing and managing data</li>
              <li>Implemented Jaccard Algorithm for recommendation system</li>
              
              <li>
                <a 
                  href="https://github.com/ojanmaharjan/FoodOrder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  🔗 View on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      

     
    </section>
  );
};

export default Works;
