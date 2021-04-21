import React from "react";
import { PostWrapper } from "../../styles/Blog.style"

export const BlogComponent = (props) => {
  return (
    <PostWrapper>
      <h1>
        {props.post.title}
      </h1>
      <h5>
        {props.post.date}
      </h5>
    </PostWrapper>
  )
}