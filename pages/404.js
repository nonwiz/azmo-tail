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
      <HeroPostLayout detail={pageDetail} />
      <QuoteHome />
      <div className="py-5">
          <hr className="w-20 mx-auto mt-4 border-rose-200" />
        <section className="flex flex-col items-center justify-center">
          <img
            src="/assets/404.svg"
            className="w-56 p-5 mx-auto my-5 rounded-lg bg-wgray-400 dark:bg-wgray-300"
          />
          <div className="w-40 text-center">
            <Link href="/">
              <a className="font-sans text-base text-wgray-600 dark:text-cgray-50 hover:underline">
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
