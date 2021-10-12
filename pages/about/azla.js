import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import QuoteHome from "../../components/quote.home";
import Image from "next/image";
import HeroPostLayout from '../../components/hero.layout';


export default function About() {

const item = 
  {'title': 'Azla Sorubou', 'content': "AZMO / About Us / Azla Sorubou", img: '', alt: ''}

  return (
    <Layout>
      <Head>
        <title>Azla Sorubou | About Us</title>
      </Head>
      <HeroPostLayout item={item} />
        <div className="mt-14"></div>
      <QuoteHome />
            <section className="py-10 mx-10 lg:mx-20">
        <div className="container px-5 sm:px-20 py-8 mx-auto shadow-xl dark:bg-rose-100 rounded-lg text-gray-500 dark:text-gray-600">
          <div className="items-center lg:flex">
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex">
                <div className="max-w-lg">
                  <img src="/assets/about/azla.png" className="w-full h-64 rounded-md" />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500 my-5">
                Who is Azla Sorubou?
              </h3>

              <p className="mt-4 text-base ">
                Hello people, I am Azla, from Sabah, Malaysia. Currently, I am
                staying in Thailand. It has been 3 years already that I am
                staying here as a full-time student at Asia-Pacific
                International University. I am majoring in Bioscience emphasize
                in community public health and minoring in Education and
                Psychology.
              </p>
            </div>
          </div>
          <div className="my-10">
            <h3 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              What is my role in Azmo?
            </h3>

            <p className="mt-4 text-base">
              Besides being a founder, I am writing content sharing about my
              studies, stories, experiences, and designs. I design this webpage
              like layout and landing page. Lastly, I am also responsible for
              promoting and planning out for this website.
            </p>
          </div>
          <div className="my-10">
            <h3 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              My Quote
            </h3>
            <p className="text-lg text-cgray-500 mt-5">
              <span className="px-1 text-cgray-500">&#10077;</span>
              Questioning, observing, answering, correcting, and learning...
              repeat
              <span className="px-1 text-gray-500">&#10078;</span>
            </p>
          </div>

          <div className="my-10">
            <h3 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              My Bible Quote
            </h3>
            <div className="text-lg text-cgray-600 mt-5 bg-cgray-50 p-2 pl-5">
              <p className="text-base">
              Ask, and it shall be given you, seek, and ye shall find, knock,
              and it shall be opened unto you. for every one that asked,
              received; and he that seethe, found; and to him that knocked, it
              shall be opened.
            </p>
              <p className="text-xs text-cgray-500 font-thin text-right">
                Matthew 7:7-8
              </p>
          </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
