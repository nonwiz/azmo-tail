import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SliderHome from "../components/slider.home";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import Image from "next/image";
import HeroHome from "../components/hero.home";
import HeroPrivacy from "../components/policy/hero";
import ContentPrivacy from '../components/policy/content.js';


export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Azmo</title>
      </Head>
      <HeroPrivacy />
      <QuoteHome />
      <ContentPrivacy />
    </Layout>
  );
}
