import React from 'react';
import '../App.css';
import { FooterMain, FooterDivLink, StyledFooter } from "./FooterStyle";

import Github from '../Assets/github.png'
import Twitter from '../Assets/twitter.png'
import LinkedIn from '../Assets/linkedin.png'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      };
    return (
    <>
        <StyledFooter>
        <button onClick={scrollToTop}>Back to Top</button>
        </StyledFooter>
        <FooterMain>
            <FooterDivLink>
            <div className="sm-icons">
				<a  href="https://twitter.com/BrendaJoshua_"> <img src={Twitter} alt="Twitter" /></a>
                <a  href="https://github.com/Brendajoshua"> <img src={Github} alt="Github" /></a>
                <a  href="https://www.linkedin.com/in/brendajoshua/"> <img src={LinkedIn} alt="LinkedIn" /></a>
            </div>
                <div>©2020 Brenda Joshua</div>
            </FooterDivLink>
        </FooterMain>
    </>
    )
};

export default Footer;