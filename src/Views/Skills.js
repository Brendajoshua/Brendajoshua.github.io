import React from "react";

import JSIcon from '../Assets/js.png';
import NodeIcon from '../Assets/node.png';
import ReactIcon from '../Assets/react.png';
import GithubIcon from '../Assets/github2.png';
import CSSIcon from '../Assets/css.png';
import HTMLIcon from '../Assets/html5.png';
import StyledC from '../Assets/styledc.png';
import MongoIcon from '../Assets/mongo.png';
import Less from '../Assets/less.png';
import Sass from '../Assets/sass.png';
import Python from '../Assets/python.png';

import { StyledSkillsContainer } from './SkillsStyle';

function Skills() {
  return (
    <>
    <StyledSkillsContainer>
        <div className="left">
            <h1>Stack❮❯</h1>
            <h2>I have experience building personal and team projects using the following technologies: </h2>
        </div>
        <div className = "right">
            <a href="https://github.com/"> <img src={GithubIcon} alt="Github" /></a>
            <a href="https://nodejs.org/en/"> <img src={NodeIcon} alt="Node" /></a>
            <a href="https://sass-lang.com/"> <img src={Sass} alt="sass" /></a>
            <a href="http://lesscss.org/"> <img src={Less} alt="less" /></a>
              <a href="https://www.javascript.com/"> <img src={JSIcon} alt="Javascript" /></a>
              <a href="https://reactjs.org/"> <img src={ReactIcon} alt="React" /></a>
              <a href="http://www.css3.info/"> <img src={CSSIcon} alt="CSS" /></a>
              <a href="https://www.mongodb.com/"> <img src={MongoIcon} alt="mongo" /></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"> <img src={HTMLIcon} alt="html5" /></a>
              <a href="https://www.python.org/"> <img src={Python} alt="styled components" /></a> 
              <a href="https://styled-components.com/"> <img src={StyledC} alt="styled components" /></a>  
          </div>
    </StyledSkillsContainer>
        
    </>
  );
}

export default Skills;