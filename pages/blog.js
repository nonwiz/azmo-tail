import Head from "next/head";
import Layout from "../components/layout";
import QuoteHome from "../components/quote.home";
import BlogHero from "../components/hero.blog";
import SidebarBlog from "../components/blog/sidebar.blog";
import MainBlog from "../components/blog/main.blog";
import { getSortedPostsData } from "../lib/posts";
import { useState } from "react";
import { FilterPostContext } from "../components/hook/PostContext";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  const [filter, setFilter] = useState({title: '', category: ''})
  return (
    <Layout>
      <Head>
        <title>Blog | Azmo</title>
      </Head>
      <BlogHero />
      <div className="py-10">
        <QuoteHome />
      </div>
      <div className="flex flex-row flex-wrap-reverse pb-10 mx-10 lg:mx-20 gap-5 md:flex-nowrap">
        <FilterPostContext.Provider value={{filter, setFilter}}>
        <div className="w-full p-5 m-1 bg-white rounded-lg shadow-lg dark:bg-wgray-500">
          <MainBlog allPosts={allPostsData} />
        </div>

        <div className="w-full m-1 rounded-lg bg-wgray-500 md:w-1/3">
          <SidebarBlog allPosts={allPostsData} />
        </div>
        </FilterPostContext.Provider>
      </div>
    </Layout>
  );
}
