import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import QuoteHome from "../components/quote.home";
import BlogHero from "../components/hero.blog";
import Card from "../components/card.home";
import SidebarBlog from "../components/blog/sidebar.blog";

export async function getStaticProps() {
  const basicDetail = {
    title: "Post Title",
    content: "Post content",
    a: "#",
    img: "/assets/bg/p2.png",
    alt: "transparent",
  };
  const sliders = [];
  for (let i = 1; i <= 4; i++) {
    sliders.push(Object.assign({}, basicDetail));
  }
  sliders[0]["active"] = "active";
  [sliders[1]["img"], sliders[1]["alt"], sliders[1]["float"]] = [
    "/assets/bg/p2.png",
    "azla stands from the left corner",
    "float-start",
  ];
  [sliders[2]["img"], sliders[2]["alt"]] = [
    "/assets/bg/p3.png",
    "azla #2 on the right",
  ];
  [sliders[3]["img"], sliders[3]["alt"]] = [
    "/assets/bg/p4.png",
    "azla #3 on the right",
  ];

  return {
    props: { sliders },
  };
}

export default function Blog({ sliders }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Home</title>
      </Head>
      <BlogHero />
      <div className="py-10">
        <QuoteHome />
      </div>
      <div className="flex flex-row mx-10 lg:mx-20 gap-5 flex-wrap-reverse md:flex-nowrap pb-10">
        <div className="w-full bg-white dark:bg-wgray-500 rounded-lg shadow-lg m-1 p-5">
          <div className="sm:text-4xl text-3xl mb-1 font-medium text-cgray-500 dark:text-cgray-50 m-3 my-5">
            <h2>All Posts</h2>
            <hr className="mt-4 w-20 border-rose-200" />
          </div>
          <div className="p-5">
            <div className="flex flex-row flex-wrap gap-y-5 items-center justify-items-center">
              {sliders.map((item, index) => (
                <Card props={item} key={index} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-wgray-500 w-full md:w-1/3 m-1 rounded-lg">
          <SidebarBlog />
        </div>
      </div>
    </Layout>
  );
}
