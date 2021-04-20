import React, {useState} from "react";
import { ReuseCont, Title, ComponentWrapper } from "../../styles/ReusableContainer.style";
import { CloseButton } from "../CloseButton"

export const ReusableContainer = (props) => {
  const [selected, setselected] = useState(false)
  let passedComponent = props.passedComponent;

  const showContent = () => {
    setselected(true);
  }

  return(
    <ReuseCont>
      {!selected &&
      <Title onClick={showContent} visible={selected}>{passedComponent.name}</Title>
      }
     {selected && <><CloseButton/><ComponentWrapper>{passedComponent()}</ComponentWrapper></>}
    </ReuseCont>
  )
}