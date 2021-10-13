import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SliderHome from "../components/slider.home";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import Image from "next/image";
import ContentPrivacy from '../components/policy/content';
import SlideShow from '../components/hero.slideshow';
import HeroPostLayout from '../components/hero.layout';

export default function Privacy() {
  const item = {'title': 'Privacy Policy', 'content': <> <a href="/"> Azmo </a> / Policy Privacy </>, img: '', alt: ''}


  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Azmo</title>
      </Head>
      <HeroPostLayout item={item} />
        <div className="mt-14"></div>
      <QuoteHome />
            <div className="mt-5"></div>
      <ContentPrivacy />
    </Layout>
  );
}
