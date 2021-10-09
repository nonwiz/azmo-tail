import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout"
import Image from "next/image";
import Card from '../components/card.blogs'
import SliderHome from '../components/slider.home'

export default function Blogs() {
  const sliders = [{'title': 'My Blogs', 'content': "Lifestyle, Travel, Tips", 'float':'float-end', 'active': 'active', 'image':'/assets/bg/transparent.png', 'alt': "transparent"}]
 
  return (
    <Layout>
      <Head>
        <title>Blogs | Azmo</title>
      </Head>
 
      <SliderHome sliders={sliders} />
 

    <div className="d-flex justify-content-start m-5 p-2">
      <div className="my-5 p-2">
        <div className="d-flex justify-content-center align-items-center">
            <Card title="MOMO MY BEST FRIEND" link="/blogs/diff/1-momo" body="This is my late Bunny. click to read the full story." imgSrc="/assets/home/momo_frame.png" />
          </div>

      </div>
    </div>

    </Layout>
  );
}
