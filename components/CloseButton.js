import styled from "styled-components";

const TopLeftBut = styled.button`
  position:absolute;
  width: fit-content;
  font-size: 40px;
  border: none;
  background-color: rgba(233, 150, 122, .0);
  `

export const CloseButton = (props) => {
  return (
    <TopLeftBut onClick={props.onClick} >&times;</TopLeftBut>
  )
}