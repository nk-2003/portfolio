// Projects.jsx
import React from 'react';
import '../App.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Project 1: E-commerce website for Boots</h3>
          <p>
          I developed the front end of an e-commerce platform called Retrokicks, which specializes in showcasing a diverse range of boots. By implementing a sleek and intuitive user interface, along with responsive web design techniques, NK-Boots provides an engaging and seamless shopping experience for users. This project highlights my expertise in creating visually appealing and user-friendly web applications, emphasizing my proficiency in front-end development technologies
          </p>
          <a href="https://nk-boots.netlify.app/" className="btn">View Project</a>
        </div>
        <div className="project-item">
          <h3>Project 2: E-commerce Bikes store</h3>
          <p>
          I developed the front end for an e-commerce platform called RertoBikes, which specializes in bike parts. By implementing a sleek and intuitive user interface, along with responsive web design techniques, RertoBikes provides an engaging and seamless shopping experience for bike enthusiasts. This project highlights my expertise in creating visually appealing and user-friendly web applications, emphasizing my proficiency in front-end development technologies. My work on RertoBikes significantly improved user engagement, demonstrating my ability to deliver impactful digital solutions.
          </p>
          <a href="https://retrobikes.netlify.app/" className="btn">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
