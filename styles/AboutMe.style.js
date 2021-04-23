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

export const AboutWrapper = styled.section`
  display: grid;
  width: inherit;
  height: inherit;
  align-content: center;
  color:rgb(235, 94, 40);
   p{
    color: white;
    font-size: .83rem;
  }
`
export const AboutContent = styled.article`
  visibility: ${props => props.visible ? "visible" : "hidden" };
  animation: 1s ${props => props.visible ? fadeIn : fadeOut};
`