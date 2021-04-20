import styled from "styled-components";

export const ReuseCont = styled.section`
  display: grid;
  justify-content:center;
  text-align: center;
  grid-template-rows: 1;
  margin: 1em;
  border: cadetblue solid;
  width: 40vw;
  height: 40vh;
`
export const Title = styled.h1`
  font-size: 10rem;
  visibility: ${props => props.visible ? 'hidden' : 'visible'};
`
export const ComponentWrapper = styled.div`
  display:flex;
`