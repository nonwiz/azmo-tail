import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout"
import Image from "next/image";
import Card from '../components/card.blogs'
import SliderHome from '../components/slider.home'

export default function Vlogs() {
  const sliders = [{'title': 'My Vlogs', 'content': "Lifestyle, Travel, Tips", 'float':'float-end', 'active': 'active', 'image':'/assets/bg/transparent.png', 'alt': "transparent"}]
 
  return (
    <Layout>
      <Head>
        <title>Vlogs | Azmo</title>
      </Head>
 
      <SliderHome sliders={sliders} />
 

    <div className="d-flex justify-content-start m-5 p-2">
      <div className="my-5 p-2">
        <div className="d-flex justify-content-center align-items-center">

          <Card title="VLOG: DORM ROOM TOUR" link="https://www.youtube.com/watch?v=dKwn0XIFyow" body="Curious how to make your dorm room to look aesthetic? Check mine!" imgSrc="/assets/home/vlog_room.png" />

          </div>

      </div>
    </div>

    </Layout>
  );
}
