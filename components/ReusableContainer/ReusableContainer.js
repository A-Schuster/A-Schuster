import React, {useState} from "react";
import Link  from "next/link"
import { ReuseCont, Title, ComponentWrapper } from "../../styles/ReusableContainer.style";
import { CloseButton } from "../CloseButton"

export const ReusableContainer = (props) => {
  const [selected, setselected] = useState(false)
  let passedComponent = props.passedComponent;

  const showContent = () => {
    if(!selected){
      setselected(true);
    }
  }

  const closeContent = () => {
    setselected(false)
  }

  return(
    <>
      {props.title &&<ReuseCont>
        <Link href={`/${props.title.toString().toLowerCase()}`}>
          <Title>{props.title}</Title>
        </Link>
        </ReuseCont>}
      {props.passedComponent && <ReuseCont onClick={showContent}>
        {!selected &&
        <Title>{passedComponent.name}</Title>
        }
      {selected && props.passedComponent && <><CloseButton onClick={closeContent}/><ComponentWrapper>{passedComponent(props.post || null)}</ComponentWrapper></>}
      </ReuseCont>}
    </>
  )
}