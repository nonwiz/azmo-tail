import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import QuoteHome from "../../components/quote.home";
import Image from "next/image";
import HeroPostLayout from "../../components/hero.layout";

export default function About() {
  const detail = {
    title: "Chanbroset Prach",
    content: (
      <>
        <Link href="/">
          <a>AZMO</a>
        </Link>{" "}
        /{" "}
        <Link href="/about-us">
          <a>About Us</a>
        </Link>{" "}
        / Chanbroset Prach
      </>
    ),
    img: "",
    alt: "",
    a: "/about/broset",
  };

  return (
    <Layout>
      <Head>
        <title>Chanbroset | About Us</title>
      </Head>
      <HeroPostLayout detail={detail} />
      <div className="mt-14"></div>
      <QuoteHome />
      <section className="py-10 mx-5 text-base md:mx-10 lg:mx-20 ">
        <div className="container px-5 py-8 mx-auto text-gray-500 rounded-lg shadow-xl sm:px-20 dark:bg-rose-100 dark:text-gray-600">
          <div className="items-center lg:flex">
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex justify-center">
                <div className="max-w-lg">
                  <img
                    src="/assets/about/broset.jpg"
                    className="w-56 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-2/3">
              <h2 className="my-5 text-3xl font-bold text-wgray-600 dark:text-wgray-500">
                Who is Chanbroset?
              </h2>

              <p className="mt-4 ">
                Hi there, I am Broset, from Cambodia. I am a senior students @
                Asia-Pacific International University in Bachelor of Science in
                Information Technology.
              </p>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              What is my role in Azmo?
            </h2>

            <p className="mt-4 ">
              I am the main developer working on both front end and backend of
              the site.
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              My Quote
            </h2>
            <p className="mt-5 text-lg text-cgray-500">
              <span className="px-1 text-cgray-500 text-center">&#10077;</span>
              Whether it is good or bad, it's hard to say.
              <span className="px-1 text-gray-500">&#10078;</span>
            </p>
          </div>
        </div>
        <div className="fixed left-0 z-50 p-2 text-white bg-wgray-500 dark:bg-white top-52 dark:text-wgray-600">
          <div className="flex flex-col my-2 gap-3">
            <a href="https://www.linkedin.com/in/broset777">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram hover:text-rose-200"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a href="https://twitter.com/chanbroset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram hover:text-rose-200"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UChddiIx-po9vZBQFKc_xgAQ/videos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-instagram hover:text-rose-200"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </a>
            <a href="https://nonwiz.cor.run/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 hover:text-rose-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
