import React, {useEffect, useState, useRef} from "react";
import { PostWrapper } from "../../styles/Blog.style"
import { Title } from "../../styles/Home.style";

export const BlogComponent = (props) => {
  const [selected,setSelected] = useState(false);
  let timeout = false

  const postPos = useRef()

  const checkScrollPos = () => {
    let postPosInfo = postPos.current.getBoundingClientRect();
    console.log(postPosInfo)
    if(window.self.scrollY < postPosInfo.top && (window.self.scrollY + (window.screen.height * .75) > postPosInfo.bottom)){
      setSelected(true)
    }
    else(setSelected(false))
  }

  useEffect(() => { 
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  const handleScroll = () => {
    if(!timeout) {
      console.log("nottimedout")
      checkScrollPos()
      timeout = true;
    }
    setTimeout(() => {
      timeout = false
    },150)
  }

  return (
    <PostWrapper ref={postPos}>
      {!selected && <>
        <Title>
          {props.post.title}
        </Title>
        <h1>
          {props.post.date}
        </h1>
      </>}
      <>{selected &&
        <h5>
          {props.post.content}
        </h5>}
      </>
    </PostWrapper>
  )
}