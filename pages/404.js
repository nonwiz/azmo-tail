import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import HeroPostLayout from "../components/hero.layout";
import QuoteHome from "../components/quote.home";

export default function FourOhFour() {
  const pageDetail = {
    title: "404",
    content: "This page could not be found",
  };
  return (
    <Layout>
      <Head>
        <title>404: This page could not be found | Azmo</title>
      </Head>
      <HeroPostLayout item={pageDetail} />
      <QuoteHome />
      <div className="py-5">
          <hr className="mt-4 mx-auto w-20 border-rose-200" />
        <section className="flex flex-col justify-center items-center">
          <img
            src="/assets/404.svg"
            className="bg-wgray-400 dark:bg-wgray-300 rounded-lg w-56 my-5 p-5 mx-auto"
          />
          <div className="w-40 text-center">
            <Link href="/">
              <a className="text-wgray-600 dark:text-cgray-50 font-sans text-base hover:underline">
                {" "}
                Return home{" "}
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
