import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SliderHome from "../components/slider.home";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import Image from "next/image";
import RecentHome from "../components/recent.home";
import SlideShow from "../components/hero.slideshow";

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

        <meta property="og:title" content="Welcome to Azmo" />
        <meta
          property="description"
          content="Our goal is to use this space to connect with you through our story, idea and tips, and knowledge."
        />
        <meta
          property="og:description"
          content="Our goal is to use this space to connect with you through our story, idea and tips, and knowledge."
        />
        <meta property="twitter:title" content="Welcome to Azmo" />
        <meta
          property="twitter:description"
          content="Our goal is to use this space to connect with you through our story, idea and tips, and knowledge."
        />

        <meta property="og:image" content="/assets/azla.png" />
        <meta property="twitter:image" content="/assets/azla.png" />
      </Head>
      <SlideShow />
      <div className="mt-14"></div>
      <QuoteHome />
      <GetToKnowHome />
      <RecentHome />
    </Layout>
  );
}
