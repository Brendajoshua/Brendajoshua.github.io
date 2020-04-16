import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAboutPage } from './AboutPageStyle';
import styled from 'styled-components'
import Theme from '../Styles/themes'
import About from './AboutPage';

import HeroImage from '../Assets/hero.jpg';
import Projects from './PortfolioPage';
import Contact from './ContactPage';
import Skills from './Skills';

const HeroBanner = styled.div`
width: 100%;
height: 480px;
background: url(${HeroImage});
background-size: cover;
display: flex;
flex-direction: row-reverse;
@media(max-width: 800px) {
    justify-content: center;
    align-items: center;
}
.heroText {
    text-align: center;
    color: ${props => props.theme.yellow};
    font-size: 6rem;
    margin: 13rem 13rem;
    @media(max-width: 800px) {
        margin: 0;
        font-size: 6rem;
    }
    .bottonRow {
        @media(max-width: 800px){
            font-size: 4.5rem;
            margin-top: 3rem;
        }
    }
}
`
function Hero() {
    return (
        <>
        <HeroBanner>
        <div className="heroText">
                <h1 className="topRow">Hello, I'm</h1>
                <h2 className="topRow">Brenda Joshua</h2>
                <h2 className="bottonRow">A Software developer</h2>
            </div>
        </HeroBanner>
        <About />
        <Projects />
        <Skills />
        <Contact />
        </>
        
    );
}

export default Hero;