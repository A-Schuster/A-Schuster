import {useEffect, useState} from 'react'
import { Austin } from './user'
import { AboutWrapper,AboutContent } from '../../styles/AboutMe.style'
import { Title } from '../../styles/Home.style'

export const AboutMe = () => {
  const [shown,setShown] = useState(false)
  const [isMobile,setMobile] = useState(false)
  const showInfo = () => {
      setShown(true)
  }

  useEffect(() => {
    if(window.outerWidth < 878){
      setMobile(true)
    }
    if(isMobile){
      showInfo()
    }
  })

  return(
  <AboutWrapper onClick={showInfo}>
    {!shown && <Title visible={shown}>About Me</Title>}
    {shown && <AboutContent visible={shown}>
      {isMobile && <h1>ABOUT ME</h1>}
      <h1>{Austin.name.firstName + " " + Austin.name.lastName}</h1>
      <h3>{Austin.knowledge.join(' ')}</h3>
      <p>{Austin.about}</p>
      <p>{Austin.goals}</p>
    </AboutContent>}
  </AboutWrapper>
  )
}