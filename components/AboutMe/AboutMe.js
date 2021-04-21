import {useState} from 'react'
import { Austin } from './user'
import { AboutWrapper,AboutContent } from '../../styles/AboutMe.style'
import { Title } from '../../styles/Home.style'
import { CloseButton } from "../CloseButton"

export const AboutMe = () => {
  const [shown,setShown] = useState(false)

  const showInfo = () => {
    if(!shown){
      setShown(true)
    }
  }
  const hideInfo = () => {
    setShown(false);
  }

  return(
  <AboutWrapper onClick={showInfo}>
    {!shown && <Title visible={shown}>About Me</Title>}
    {shown && <AboutContent visible={shown}>
      <CloseButton onClick={hideInfo}/>
      <h1>{Austin.name.firstName + "" + Austin.name.lastName}</h1>
      <h3>{Austin.knowledge.join(' ')}</h3>
      <p>{Austin.about}</p>
      <p>{Austin.goals}</p>
    </AboutContent>}
  </AboutWrapper>
  )
}