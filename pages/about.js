import Layout from "../components/layout";
import Head from "next/head";
import SliderHome from "../components/slider.home";
import Card from "../components/card.blogs";

export default function AboutMe() {
  const sliders = [
    {
      title: "AZLA JONULING",
      content: '',
      float: "float-end",
      active: "active",
      image: "/assets/slider/az_right_0.png",
      alt: "transparent",
    },
  ];

  return (
    <Layout>
      <Head>
        <title> About me | Azmo </title>
      </Head>
      <SliderHome sliders={sliders} />

      <div className="container my-5">
        <div className="d-flex justify-content-center align-content-center my-1">
          <div
            style={{
              background: "#a7b0a6",
              width: "300px",
              height: "1em",
              position: "absolute",
              transform: "translate(0, 20px)",
            }}
            className="px-5"
          ></div>

          <div
            style={{
              background: "var(--pink)",
              zIndex: "10",
              height: "1.7rem",
              width: "290px",
            }}
            className="px-5"
          >
            <h2 className="text-center">My Work</h2>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-gap px-5 flex-wrap">
        <Card
          title="BLOGGING"
          link="/vlogs"
          body="I write about my trip, adventure, and experience"
          imgSrc="/assets/blog/nature_my_blog.png"
        />

        <Card
          title="VLOGGING"
          link="/vlogs"
          body="Curious to see another side of the world? Check out my Vlog"
          imgSrc="/assets/vlog/vlog_journey.png"
        />
 
        <Card
          title="DESIGNING"
          link="/collection"
          body="Journal, Calendar"
          imgSrc="/assets/collection/design/calendar.png"
        />
      </div>
    </Layout>
  );
}
