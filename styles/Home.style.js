import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  height: auto;
  padding: 4em;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`