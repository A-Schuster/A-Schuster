import React from 'react';
import Link from 'next/link'
import { BlogComponent } from '../components/Blog/Blog';
import { Posts } from '../components/Blog/blogs'
import { ReuseCont } from '../styles/Home.style';
import { BlogWrapper } from '../styles/Blog.style';

export const Blog = () => {
  return (
    <BlogWrapper>
      <Link href="/"><h1>HOME</h1></Link>
      {Posts.map(post => <ReuseCont><BlogComponent post={post}/></ReuseCont>)}
    </BlogWrapper>
  )
}


export default Blog