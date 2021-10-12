import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SliderHome from "../components/slider.home";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import Image from "next/image";
import ContentPrivacy from '../components/policy/content.js';
import SlideShow from '../components/hero.slideshow.js';

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Azmo</title>
      </Head>
      <SlideShow /> 
        <div className="mt-14"></div>
      <QuoteHome />
            <div className="mt-5"></div>
      <ContentPrivacy />
    </Layout>
  );
}
