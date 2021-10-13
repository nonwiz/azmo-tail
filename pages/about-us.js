import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import QuoteHome from "../components/quote.home";
import HeroAbout from "../components/about-us/hero";
import MainAbout from '../components/about-us/content';
import HeroPostLayout from '../components/hero.layout';


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


export default function About() {

const item = 
    {'title': 'About us', 'content': <> <a href="/"> Azmo </a> / about us </>, img: '', alt: ''}

  return (
    <Layout>
      <Head>
        <title>About Us | Azmo</title>
      </Head>
      <HeroPostLayout item={item} />
        <div className="mt-14"></div>
      <QuoteHome />
      <HeroAbout />
      <MainAbout />
    </Layout>
  );
}
