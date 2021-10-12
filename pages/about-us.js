import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import SliderHome from "../components/slider.home";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import Image from "next/image";
import HeroAbout from "../components/about-us/hero";
import MainAbout from '../components/about-us/vjl';
import SlideShow from '../components/hero.slideshow';
import HeroLayout from '../components/hero.layout';


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


export default function About({ sliders }) {
  const images = [
  "/assets/bg/transparent.png",
  "/assets/slider/az_left.png",
  "/assets/slider/az_right_0.png",
  "/assets/slider/az_right_1.png",
];

const content = 'Lifestyle, Vlogging, & Blogging, and Tips about Health';

const slides = 
[
  {'title': 'About us', 'content': "", img: images[0], alt: ''},
]
  return (
    <Layout>
      <Head>
        <title>About Us | Azmo</title>
      </Head>
      <HeroLayout slides={slides} />
        <div className="mt-14"></div>
      <QuoteHome />
      <HeroAbout />
      <MainAbout />
    </Layout>
  );
}
