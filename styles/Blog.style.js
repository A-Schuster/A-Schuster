import styled, {keyframes} from "styled-components"
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

export const PostWrapper = styled.article`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: inherit;
`
export const BlogWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PostInfo = styled.div`
  color: white;
  visibility: ${props => props.visible ? 'hidden' : 'visible'};
  animation: 1s ${props => props.visible ? fadeOut : fadeIn};
`