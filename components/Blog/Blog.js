import React, {useEffect, useState, useRef} from "react";
import { PostWrapper } from "../../styles/Blog.style"
import { Title } from "../../styles/Home.style";

export const BlogComponent = (props) => {
  const [selected,setSelected] = useState(false);

  const handleSelect = () => {
    props.visibility ? setSelected(true) : setSelected(false)
  }

  const pageY = useRef()
  useEffect(() => {
    let pagePos = [pageY.current.getBoundingClientRect(),props.post.id]
    props.getPostPos(pagePos)
  },[])

  

  return (
    <PostWrapper onClick={handleSelect} ref={pageY}>
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