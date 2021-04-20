import styled from "styled-components";

export const ReuseCont = styled.section`
  display: grid;
  justify-content:center;
  text-align: center;
  grid-template-rows: 1fr;
  margin: 1em;
  align-items: center;
  border: cadetblue solid;
  width: 40vw;
  min-height: 350px;
  min-width: 350px;
  height: 40vh;
  justify-self: center;
`
export const Title = styled.h1`
  font-size: 3vw;
  visibility: ${props => props.visible ? 'hidden' : 'visible'};
`
export const ComponentWrapper = styled.div`
  display:flex;
`