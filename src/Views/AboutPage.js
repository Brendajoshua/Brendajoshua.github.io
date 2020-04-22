import React from 'react';
import { Link } from 'react-router-dom';

//Style Imports
import { StyledLandingContainer } from './AboutPageStyle'

// Image Imports
import Me from '../Assets/me.jpg';

function About() {
  return (
    <StyledLandingContainer>
      <div className="left">
        <h1>About Me</h1>
        <p>
        I'm a Full Stack Developer based in Nairobi, Kenya. I'm eager to bring my modern web development skills to creative and innovative projects.
        I'm addicted to solving complex problems with clean, maintainable code.
        I live for those "aha" moments when everything clicks together.
        Always learning, growing, and developing.
        </p>
        <p>
        Off the key board, I enjoy spending time with family and friends, reading and catching up on my favorite shows.
        </p>
      </div>
      <div className="right">
        <div className="img-cont">
          <img src={Me} alt="Brenda" />
        </div>
      </div>
    </StyledLandingContainer>
  );
}

export default About;