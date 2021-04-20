import styled from "styled-components";

const TopLeftBut = styled.button`
  width: 4rem;
  height: 4rem;
  max-width: 400px;
  background-color: rgba(233, 150, 122, 0);
  `

export const CloseButton = () => {
  return (
    <TopLeftBut>&times;</TopLeftBut>
  )
}