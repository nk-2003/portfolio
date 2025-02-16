// Achievements.jsx
import React from 'react';
import '../App.css';

const Achievements = () => {
  return (
    <div className="achievements">
      <h2>My Achievements</h2>
      <ol>
        <li>
          <strong>Top Projects:</strong>
          <ul>
            <li>I developed the front end of an e-commerce platform called Retrokicks, which specializes in showcasing a diverse range of boots. By implementing a sleek and intuitive user interface, along with responsive web design techniques, NK-Boots provides an engaging and seamless shopping experience for users. This project highlights my expertise in creating visually appealing and user-friendly web applications, emphasizing my proficiency in front-end development technologies.<a href="https://nk-boots.netlify.app/">View Project</a></li>
            <li>I developed the front end for an e-commerce platform called RertoBikes, which specializes in bike parts. By implementing a sleek and intuitive user interface, along with responsive web design techniques, RertoBikes provides an engaging and seamless shopping experience for bike enthusiasts. This project highlights my expertise in creating visually appealing and user-friendly web applications, emphasizing my proficiency in front-end development technologies. My work on RertoBikes significantly improved user engagement, demonstrating my ability to deliver impactful digital solutions. <a href="https://retrobikes.netlify.app/">View Project</a></li>
          </ul>
        </li>
        <li>
          <strong>Certifications:</strong>
          <ul>
            <li>I am certified in React JS, a testament to my expertise in this powerful JavaScript library and my unwavering commitment to continuous learning and professional growth. This certification underscores my ability to build dynamic and responsive web applications, showcasing a deep understanding of component-based architecture, state management, and efficient rendering techniques. My proficiency in React JS enables me to create seamless and engaging user experiences, ensuring that I stay at the forefront of modern web development practices.</li>
            <li>I hold a certification in SQL, highlighting my proficiency in managing and manipulating databases. This certification reflects my ability to design efficient database schemas, write complex queries, and optimize database performance. With a strong understanding of relational databases and SQL, I can effectively manage data, support web applications, and ensure data integrity. My SQL skills enable me to handle large datasets and extract valuable insights, contributing to the overall success and performance of web projects.</li>
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
