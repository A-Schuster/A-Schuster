import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

export const HomeWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  height: auto;
  padding: 4em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-template-columns: 1fr;
  }
`
export const ReuseCont = styled.section`
  display: grid;
  justify-content:center;
  text-align: center;
  grid-template-rows: 1fr;
  margin: 1em;
  align-items: center;
  border: teal solid;
  width: 40vw;
  min-height: 350px;
  min-width: 350px;
  background-color: rgb(64, 61, 57);
  height: 40vh;
  justify-self: center;
`
export const Title = styled.h1`
  font-family: ${props => props.font || 'Rock Salt'}, cursive;
  font-size: 2.5vw;
  cursor: pointer;
  color: rgb(235, 94, 40);
  visibility: ${props => props.visible ? 'hidden' : 'visible'};
  animation: 1s ${props => props.visible ? fadeOut : fadeIn};
  @media (max-width: 768px) {
    font-size: 2em;
  };
`
