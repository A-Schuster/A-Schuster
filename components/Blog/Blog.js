import React, {useEffect, useState, useRef} from "react";
import { PostInfo, PostWrapper } from "../../styles/Blog.style"
import { Title } from "../../styles/Home.style";

export const BlogComponent = (props) => {
  const [selected,setSelected] = useState(false);
  let timeout = false;
  const postPos = useRef();

  const checkScrollPos = () => {
    let postPosInfo = postPos.current.getBoundingClientRect();
    if(window.self.scrollY + (window.screen.height) > postPosInfo.bottom + window.self.scrollY && window.self.scrollY + (window.screen.height * .4) < postPosInfo.bottom + window.self.scrollY){
      setSelected(true);
    }
    else(
      setSelected(false)
      )
  }

  const forceShow = () => {
    if(!selected){
      setSelected(true);
      window.removeEventListener('scroll',handleScroll);
    }
  }

  useEffect(() => { 
    window.addEventListener('scroll',handleScroll)
    checkScrollPos()
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  },[])

  const handleScroll = () => {
    if(!timeout) {
      checkScrollPos()
      timeout = true;
    }
    setTimeout(() => {
      timeout = false
    },100)
  }

  return (
    <PostWrapper onClick={forceShow} ref={postPos}>
      {!selected && <>
        <Title>
          {props.post.title}
        </Title>
        <Title font={"Bangers"}>
          {props.post.date}
        </Title>
      </>}
      <>{selected &&
        <PostInfo>
          <h2>{props.post.content}</h2>
          <h2>{props.post.pictures}</h2>
          <h2>{props.post.date}</h2>
        </PostInfo>}
      </>
    </PostWrapper>
  )
}