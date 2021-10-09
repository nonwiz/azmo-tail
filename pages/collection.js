import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import Card from "../components/card.blogs";
import SliderCollection from "../components/slider.collection";
import QuoteHome from "../components/quote.home";

export default function Collection() {
  const slider_content =
    "In this pages, I would like to share to you my designs. I'm not really good in design since I'm not a designer student. This will be including, journalling book, powerpoint, notes, wallpaper, storyline, and stickers. All free to downloads. I hope you guys going to love it. If you want to pay as donation I would be appreciated. This will be used in my future career";

  const sliders = [
    {
      title: "MY DESIGN",
      content: "AZLA JONULING",
      float: "float-end",
      active: "active",
      image: "/assets/bg/transparent.png",
      alt: "transparent",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>Collection | Azmo</title>
      </Head>
      <SliderCollection
        sliders={sliders}
        props={{ bg: "bg-img", title: "custom-title" }}
      />
      <div className="container-fluid">
        <QuoteHome />
        <section className="card mx-5">
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Hey there</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">{slider_content}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="d-flex justify-content-start m-2 p-2">
        <div className="my-5 p-2">
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <Card
              title="Journal-Light"
              link="/assets/collection/design/calendar-2022.pdf"
              body="Calendar, Goal Planner, To Do List, Daily Planner "
              imgSrc="/assets/collection/design/calendar-light.png"
            />

            <Card
              title="Journal-Dark"
              link="/assets/collection/design/calendar-2022-01.pdf"
              body="Calendar, Goal Planner, To Do List, Daily Planner "
              imgSrc="/assets/collection/design/calendar.png"
            />
          </div>
        </div>
      </div>
      <div className="d-grid justify-content-sm-center">
        <a
          href="https://paypal.me/broset777"
          className="btn btn-outline-secondary btn-lg text-dark"
        >
          {" "}
          Donate{" "}
        </a>
      </div>
    </Layout>
  );
}
