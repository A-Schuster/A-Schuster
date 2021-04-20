import React from "react";
import styled from 'styled-components'

const BlogWrapper = styled.article`
  display: flex; 
  flex-direction: column;
`

export const BlogComponent = (post) => {
  return (
    <BlogWrapper>
      <h1>
        {post.title}
      </h1>
      <h2>
        {post.date}
      </h2>
    </BlogWrapper>
  )
}