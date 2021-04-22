import {useEffect, useState} from 'react'
import { Austin } from './user'
import { AboutWrapper,AboutContent } from '../../styles/AboutMe.style'
import { Title } from '../../styles/Home.style'
import { CloseButton } from "../CloseButton"

export const AboutMe = () => {
  const [shown,setShown] = useState(false)
  const isMobile = window.outerWidth < 878 ? true : false;

  const showInfo = () => {
    if(!shown){
      setShown(true)
    }
  }
  const hideInfo = () => {
    setShown(false);
  }

  useEffect(() => {
    if(isMobile){
      setShown(true)
    }
  })

  return(
  <AboutWrapper onClick={showInfo}>
    {!shown && <Title visible={shown}>About Me</Title>}
    {shown && <AboutContent visible={shown}>
      <CloseButton onClick={hideInfo}/>
      {isMobile && <h1>ABOUT ME</h1>}
      <h1>{Austin.name.firstName + " " + Austin.name.lastName}</h1>
      <h3>{Austin.knowledge.join(' ')}</h3>
      <p>{Austin.about}</p>
      <p>{Austin.goals}</p>
    </AboutContent>}
  </AboutWrapper>
  )
}