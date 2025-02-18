import React, { useState } from 'react';
import '../App.css';

const Achievements = () => {
  const [showDescription, setShowDescription] = useState(null);

  const handleClick = (index) => {
    setShowDescription((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="achievements">
      <h2>My Achievements</h2>
      <ol>
        <li>
          <strong>Top Projects:</strong>
          <ul>
            <li>
              <strong>
                <a
                  href="#!"
                  onClick={() => handleClick(1)}
                  className="btn btn-link"
                >
                  Retrokicks E-commerce Platform
                </a>
              </strong>
              {showDescription === 1 && (
                <p>
                  I developed the front end of an e-commerce platform called Retrokicks, which specializes in showcasing a diverse range of boots. By implementing a sleek and intuitive user interface, along with responsive web design techniques, NK-Boots provides an engaging and seamless shopping experience for users. This project highlights my expertise in creating visually appealing and user-friendly web applications, emphasizing my proficiency in front-end development technologies.{' '}
                  <a
                    href="https://nk-boots.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </p>
              )}
            </li>
            <li>
              <strong>
                <a
                  href="#!"
                  onClick={() => handleClick(2)}
                  className="btn btn-link"
                >
                  RertoBikes E-commerce Platform
                </a>
              </strong>
              {showDescription === 2 && (
                <p>
                  I developed the front end for an e-commerce platform called RertoBikes, which specializes in bike parts. By implementing a sleek and intuitive user interface, along with responsive web design techniques, RertoBikes provides an engaging and seamless shopping experience for bike enthusiasts. This project highlights my expertise in creating visually appealing and user-friendly web applications, emphasizing my proficiency in front-end development technologies. My work on RertoBikes significantly improved user engagement, demonstrating my ability to deliver impactful digital solutions.{' '}
                  <a
                    href="https://retrobikes.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project
                  </a>
                </p>
              )}
            </li>
          </ul>
        </li>
        <li>
          <strong>Certifications:</strong>
          <ul>
            <li><strong>React JS</strong></li>
            <li><strong>SQL</strong></li>
          </ul>
        </li>
        <li>
          <strong>Skills:</strong>
          <ul>
            <li>Proficient in JavaScript, React JS</li>
            <li>Experienced in responsive web design and development.</li>
            <li>Strong understanding of RESTful APIs and web services.</li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Achievements;
