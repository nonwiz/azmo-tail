import Head from "next/head";
import Layout from "../components/layout";
import QuoteHome from "../components/quote.home";
import BlogHero from "../components/hero.blog";
import Sidebar from "../components/subposts/sidebar";
import Main from "../components/subposts/main";
import { getSortedPostsData } from "../lib/posts";
import { useState } from "react";
import { FilterPostContext } from "../components/hook/PostContext";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().filter(
    (item) => item.category == "Blog"
  );
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  console.log(allPostsData);
  const recent = allPostsData.slice(0, 2);
  const [filter, setFilter] = useState({
    title: "",
    category: "",
    siteTitle: "Blog",
  });
  return (
    <Layout>
      <Head>
        <title>{filter.siteTitle} | Azmo</title>
      </Head>
      <BlogHero slides={recent} />
      <div className="py-10">
        <QuoteHome />
      </div>
      <div className="flex flex-row flex-wrap-reverse pb-10 mx-5 lg:mx-20 gap-5 md:flex-nowrap">
        <FilterPostContext.Provider value={{ filter, setFilter }}>
          <div className="w-full bg-white rounded-lg shadow-lg dark:bg-wgray-500">
            <Main allPosts={allPostsData} />
          </div>

          <div className="w-full m-1 rounded-lg bg-wgray-500 md:w-1/3">
            <Sidebar allPosts={allPostsData} />
          </div>
        </FilterPostContext.Provider>
      </div>
    </Layout>
  );
}
