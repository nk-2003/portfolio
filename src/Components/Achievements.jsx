import React from 'react';
import '../App.css';

const Achievements = () => {
  return (
    <div className="achievements container py-5">
      <h2 className="text-center mb-4">My Achievements</h2>
      <ol>
        <li>
          <strong>Top Projects:</strong>
          <ul>
            <li className="project-wrapper">
              <img src="images/pro1.png" className="project-image" />
              <div className="project-details">
                <p className="project-title">Retrokicks E-commerce Platform</p>
                <p className="project-description">
                  I developed the front end of an e-commerce platform called Retrokicks, 
                  specializing in showcasing a diverse range of boots. By implementing a sleek 
                  and intuitive user interface, along with responsive web design techniques, 
                  Retrokicks provides an engaging shopping experience for users.
                </p>
                <a
                  href="https://nk-boots.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </li>

            <li className="project-wrapper">
              <img src="images/pro2.png" className="project-image" />
              <div className="project-details">
                <p className="project-title">RetroBikes E-commerce Platform</p>
                <p className="project-description">
                  I developed the front end for an e-commerce platform called RetroBikes, 
                  specializing in bike parts. By implementing a sleek and intuitive user interface, 
                  RetroBikes provides an engaging shopping experience for bike enthusiasts.
                </p>
                <a
                  href="https://retrobikes.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Project
                </a>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Achievements;



