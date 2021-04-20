import Head from 'next/head'
import { ReusableContainer } from '../components/ReusableContainer/ReusableContainer';
import { HomeWrapper } from '../styles/Home.style';
import { AboutMe } from "../components/AboutMe/AboutMe"
import { Contact } from '../components/Contact/contact';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Austin Schuster</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="Austin Schuster" content="Home Page" key="Home" />
    </Head>
      <HomeWrapper>
        <ReusableContainer passedComponent={AboutMe}/>
        <ReusableContainer passedComponent={Contact}/>
        <ReusableContainer title={"Blog"}/>
      </HomeWrapper>
    </>
  );
}
