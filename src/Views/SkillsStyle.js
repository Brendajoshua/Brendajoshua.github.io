import styled from 'styled-components'


export const StyledSkillsContainer = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-top: 5rem;
  @media (max-width: 950px) {
    padding: 0 3rem 0 2rem;
  }
  @media (max-width: 700px) {
      flex-direction: column;
      padding: 0;
      margin-bottom: 5rem;
  }
  @media (max-width: 50px) {
      margin-top: 2rem;
}
  .left {
    width: 45%;
    @media (max-width: 700px) {
        width: 90%;
    }
    h1 {
    color: ${props => props.theme.yellow};
      font-size: 3.4rem;
      margin-bottom: 2rem;
    }
    h2 {
      color: ${props => props.theme.header};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }
    
      a {
        color: ${props => props.theme.red};
        transition: color 0.3s ease-in-out;
        :hover {
          color: ${props => props.theme.green};
          transition: color 0.3s ease-in-out;
        }
      }
    }
  }
  .right {
    width: 50%;
    @media (max-width: 700px) {
        width: 40%;
    }
    @media (max-width: 500px) {
        width: 60%;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;