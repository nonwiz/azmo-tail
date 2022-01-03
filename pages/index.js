import Head from "next/head";
import Layout from "../components/layout";
import QuoteHome from "../components/quote.home";
import GetToKnowHome from "../components/getToKnow.home";
import RecentHome from "../components/recent.home";
import SlideShow from "../components/hero.slideshow";
import { getSortedPostsData } from "../lib/posts";
import { FilterPostContext } from "../components/hook/PostContext";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const recent = allPostsData.slice(0, 3);
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
      <RecentHome recent={recent} />
      <div className="fixed bottom-0 right-0 rounded-full bg-rose-200 m-2">
        <img src="/assets/new_year.png" className="transform -translate-y-4 w-16 md:w-24" />
      </div>
    </Layout>
  );
}
