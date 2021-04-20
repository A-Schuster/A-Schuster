import Head from 'next/head'
import Link from 'next/link'
import { Blog } from '../components/Blog/Blog';
import { ReusableContainer } from '../components/ReusableContainer/ReusableContainer';
import { HomeWrapper } from '../styles/Home.style';
import { AboutMe } from "../components/AboutMe/AboutMe"

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <ReusableContainer passedComponent={AboutMe}/>
        <ReusableContainer passedComponent={Blog}/>
        <ReusableContainer passedComponent={Blog}/>
      </HomeWrapper>
    </>
  );
}
