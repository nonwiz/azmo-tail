import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SliderHome from "../components/slider.home";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import BlogHome from "../components/blog.home";
import VlogHome from "../components/vlog.home";
import Image from "next/image";
import HeroHome from '../components/hero.home';
import RecentHome from '../components/recent.home';

export async function getStaticProps() {
  const basicDetail = {
    title: "Azla Jonuling",
    content: "Lifestyle, Vlogging & Blogging, and Tips about health",
    float: "float-end",
    active: "",
    image: "/assets/bg/transparent.png",
    alt: "transparent",
  };
  const sliders = [];
  for (let i = 1; i <= 4; i++) {
    sliders.push(Object.assign({}, basicDetail));
  }
  sliders[0]["active"] = "active";
  [sliders[1]["image"], sliders[1]["alt"], sliders[1]["float"]] = [
    "/assets/slider/az_left.png",
    "azla stands from the left corner",
    "float-start",
  ];
  [sliders[2]["image"], sliders[2]["alt"]] = [
    "/assets/slider/az_right_0.png",
    "azla #2 on the right",
  ];
  [sliders[3]["image"], sliders[3]["alt"]] = [
    "/assets/slider/az_right_1.png",
    "azla #3 on the right",
  ];

  return {
    props: { sliders },
  };
}

export default function Home({ sliders }) {
  return (
    <Layout>
      <Head>
        <title>Azmo | Home</title>
      </Head>
      <HeroHome />
            <QuoteHome />
        <RecentHome />
      <GetToKnowHome />
    </Layout>
  );
}
