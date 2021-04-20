import React from "react";
import { Austin } from './user'
import { AboutWrapper } from '../../styles/AboutMe.style'

export const AboutMe = () => {
  return(
  <AboutWrapper>
    <h1>{Austin.name.firstName + "" + Austin.name.lastName}</h1>
    <h3>{Austin.knowledge}</h3>
    <p>{Austin.about}</p>
    <p>{Austin.goals}</p>
  </AboutWrapper>
  )
}