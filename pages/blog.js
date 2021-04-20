import React from 'react';
import Link from 'next/link'
import { BlogComponent } from '../components/Blog/Blog';
import { Posts } from '../components/Blog/blogs'
import { ReusableContainer } from "../components/ReusableContainer/ReusableContainer"

export const Blog = () => {
  return (
    <div>
      <Link href="/">HOME</Link>
      {Posts.map(post => <ReusableContainer post={post} passedComponent={BlogComponent}/>)}
    </div>
  )
}


export default Blog