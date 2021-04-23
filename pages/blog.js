import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import { BlogComponent } from '../components/Blog/Blog';
import { Posts } from '../components/Blog/blogs'
import { ReuseCont } from '../styles/Home.style';
import { BlogWrapper } from '../styles/Blog.style';

export const Blog = () => {

  // const winRef = useRef()

  // useEffect(() => {
  //   window.addEventListener('scroll',handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // },[])

  // const getPostY = (val) => {
  //   postYs.push(val)
  // }

  // const checkScrollPos = () => {
  //   postYs.forEach(post => {
  //     if(post[0].top < window.top.scrollY && post[0].bottom > window.top.scrollY){
  //       console.log("top is in")
  //     }
  //   })
  // }

  // const handleScroll = () => {
  //   // if (!ticking) {
  //   //   window.requestAnimationFrame(() => {
  //   //     winRef.current.style.top = `${lastScrollY}px`;
  //   //     ticking = false;
  //   //   })
  //   //   ticking = true;
  //   // }
  //   if(Math.floor(window.top.scrollY) % 2 === 0){
  //     checkScrollPos()
  //   }
  // }

  return (
    <BlogWrapper >
      <Link href="/"><h1>HOME</h1></Link>
      {Posts.reverse().map((post,index) => <ReuseCont key={`${post.id + index}`}><BlogComponent post={post}/></ReuseCont>)}
    </BlogWrapper>
  )
}


export default Blog

// document.getElementById("taco").getBoundingClientRect()