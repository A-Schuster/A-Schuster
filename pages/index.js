import Head from 'next/head'
import Link from 'next/link'
import { HomeWrapper, ReuseCont, Title } from '../styles/Home.style';
import { AboutMe } from "../components/AboutMe/AboutMe"

export default function Home() {
  return (
    <>
    <Head>
      <title>Austin Schuster</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="Austin Schuster" content="Home Page" key="Home" />
    </Head>
      <HomeWrapper>
        <ReuseCont><AboutMe /></ReuseCont>
        <ReuseCont><a href="https://github.com/A-Schuster" target="_blank"><Title>GitHub</Title></a></ReuseCont>
        <ReuseCont><a href="mailto:aschuster.dev@gmail.com"><Title>Contact</Title></a></ReuseCont>
        <Link href="/blog"><ReuseCont><Title>BLOG</Title></ReuseCont></Link>
      </HomeWrapper>
    </>
  );
}
