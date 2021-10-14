import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import QuoteHome from "../components/quote.home";
import HeroAbout from "../components/about-us/hero";
import MainAbout from '../components/about-us/content';
import HeroPostLayout from '../components/hero.layout';


export default function About() {

const detail = 
    {'title': 'About us', 'content': <> <a href="/"> Azmo </a> / about us </>, alt: ''}

  return (
    <Layout>
      <Head>
        <title>About Us | Azmo</title>
      </Head>
      <HeroPostLayout detail={detail} />
        <div className="mt-14"></div>
      <QuoteHome />
      <HeroAbout />
      <MainAbout />
    </Layout>
  );
}
