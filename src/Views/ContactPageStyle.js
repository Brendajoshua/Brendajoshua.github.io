import styled from 'styled-components';

export const StyledContactPage = styled.section`
    max-width: 100%;
  overflow-y: auto;
  @media (max-width: 950px) {
    padding: 0 3rem 0 2rem;
  }
  @media (max-width: 400px) {
    padding: 0 1rem 0 2rem;
  }
  h2 {
    color: ${props => props.theme.yellow};
    font-size: 3.4rem;
    margin-bottom: 2rem;
  }
  p {
    width: 80%;
    font-size: 1.6rem;
    line-height: 2.5rem;
    margin-bottom: 2rem;
    @media (max-width: 600px) {
      width: 90%;
    }
  }
  li {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center; 
    .img-cont {
      width: 2rem;
      img {
        max-width: 100%;
        height: auto;
      }
    }
    a {
      color: ${props => props.theme.darker};
      transition: color 0.3s ease-in-out;
      margin-left: 1.5rem;
      @media(max-width: 440px) {
        font-size: 1.3rem;
      }
      :hover {
        color: ${props => props.theme.yellow};
        transition: color 0.3s ease-in-out;
      }
    }
  }
`;