import React from 'react';
import styled from 'styled-components';

import Dadjokes from '../Assets/dadjokes.png';
import ArtFunder from '../Assets/artfunder.png';
import RickMorty from '../Assets/rickmorty.png';
import Partyplanner from '../Assets/partyplanner.png';

const StyledPortfolioIntro = styled.section`
  max-width: 100%;
  margin-bottom: 7.5rem;
  @media (max-width: 950px) {
    padding: 0 3rem 0 2rem;
  }
  @media (max-width: 400px) {
    padding: 0 1rem 0 2rem;
  }
  h2 {
    color: ${props => props.theme.yellow};
    font-size: 3.4rem;
    margin-bottom: 1.7rem;
  }
  p {
    width: 100%;
    font-size: 1.5rem;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    a {
      color: ${props => props.theme.lemon};
      transition: color 0.3s ease-in-out;
      :hover {
        color: ${props => props.theme.green};
        transition: color 0.3s ease-in-out;
      }
    }
    
    span {
        color: ${props => props.theme.green};
    }
    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;

const StyledPortfolioContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.5rem;
    @media(max-width: 950px){
        justify-content: space-evenly;
    }
    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
    .left,
    .right {
      width: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media(max-width: 800px){
          width: 90%;
          margin-bottom: 5rem;
    }
      h3 {
          margin: 2rem 2rem 2rem 2rem;
          font-size: 2rem;
          font-weight: bold;
          color: ${props => props.theme.green};
      }
      p {
          width: 90%;
          font-size: 1.3rem;
          line-height: 2rem;
          text-align: center;
      }
      .img-cont {
        width: 100%;
            img {
                max-width: 100%;
                height: auto;
                transition: filter 0.3s ease-in-out;
                :hover {
                transition: filter 0.4s ease-in-out;
                filter: blur(2px);
                }
            }
        }
        a {
        margin: 0.5rem 0;
        font-size: 1.4rem;
        color: ${props => props.theme.lemon};
        transition: color 0.3s ease-in-out;
        :hover {
          color: ${props => props.theme.yellow};
          transition: color 0.3s ease-in-out;
        }
      }
    }
  }
`;
function Projects() {
  return (
    <>
        <StyledPortfolioIntro>
        <h2>Projects</h2>
        <p>I enrolled at Lambda School to grow my skills and advance professionally.Here are a few of the projects I've implemented throughout the journey.</p>
        </StyledPortfolioIntro>
        <StyledPortfolioContainer>
      <section>
        <div className="left">
        <h3>Artfunder</h3>
        <div className="img-cont">
            <img src={ArtFunder} alt="Preview of ArtFunder" />
          </div>
          
          <a href="https://art-funder.com/" target="_blank" rel="noopener noreferrer">Demo</a>
          <a href='https://github.com/LABS-EU3/Student-Art-Collection-FRONTEND' target="_blank" rel="noopener noreferrer">❮Source Code❯</a>
          <p>An E-commerce platform for schools to sell students' art and put 100% of the profit directly back into the arts programs.</p>
          <p>React | Redux | Express | Node.js | MongoDB | FireBase | Stripe |</p>
        </div>
        <div className="right">
        <h3>Dad Jokes</h3>
        <div className="img-cont">
            <img src={Dadjokes} alt="Preview of Dadjokes" />
          </div>
          <a href="https://dadjokes.brendajoshua.now.sh/" target="_blank" rel="noopener noreferrer">Demo</a>
          <a 
            href='https://github.com/lambda-bw-dad-jokes' 
            target="_blank" 
            rel="noopener noreferrer">❮Source Code❯</a>
              <p>A collection of puns and corny  dad jokes with the ability to add and edit your own jokes.</p>
              <p>React | Redux | Express | Node.js | Styled Components |</p>
          </div>
      </section>
      <section>
      <div className="left">
      <h3>Rick & Morty</h3>
          <div className="img-cont">
            <img src={RickMorty} alt="Preview of Ceriph" />
          </div>
          <a href="https://rick-and-morty.brendajoshua.now.sh/" target="_blank" rel="noopener noreferrer">Demo</a>
          <a href='https://github.com/Brendajoshua/Rick-and-Morty' target="_blank" rel="noopener noreferrer">❮Source Code❯</a>

          <p>A simple fun game of searching the characters of the American adult animated science fiction sitcom "Rick & Morty". </p>
          <p>React | Material UI | Express | Node.js |</p>
          </div>
        <div className="right">
        <h3>Party Planner</h3>
          <div className="img-cont">
            <img src={Partyplanner} alt="Preview of Three66" />
          </div>
          <a href='https://github.com/BW-PartyPlannerFT/BackEnd' target="_blank" rel="noopener noreferrer">❮Source Code❯</a>

          <p>An application that makes party planning effortless by keeping track of all your party planning details: budget, todolist, shopping list e.tc</p>
          <p>On this project, I worked solely on the backend.</p>
          <p>React | Redux | Express | Node.js | SQL |</p>

          </div>
      </section>
    </StyledPortfolioContainer>
</>
  );
}

export default Projects;