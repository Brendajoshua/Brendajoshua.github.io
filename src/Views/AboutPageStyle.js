import styled from 'styled-components'


export const StyledLandingContainer = styled.section`
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
    width: 65%;
    @media (max-width: 700px) {
        width: 90%;
    }
    h1 {
      color: ${props => props.theme.yellow};
      font-size: 3.4rem;
      margin-bottom: 2rem;
    }
    p {
      width: 90%;
      font-size: 1.6rem;
      line-height: 2.5rem;
      margin-bottom: 2rem;
      @media (max-width: 700px) {
        width: 100%;
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
    width: 35%;
    @media (max-width: 700px) {
        width: 40%;
    }
    @media (max-width: 500px) {
        width: 60%;
    }
    img {
      max-width: 100%;
      height: auto;
      border-radius: 2%;
      transform: rotate(360deg);
    }
  }
`;