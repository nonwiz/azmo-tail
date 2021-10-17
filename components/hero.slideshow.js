import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./layout.module.css";

const images = [
  "/assets/bg/transparent.png",
  "/assets/slider/az_left.png",
  "/assets/slider/az_figure.png",
  "/assets/slider/fruit.png",
];

const content = "Lifestyle, Vlogging, & Blogging, and Tips about Health";

const slides = [
  { title: "AZMO CHERISH", content: content, img: images[0], alt: "" },
  { title: "LET'S GROW TOGETHER", content: content, img: images[1], alt: "" },
  { title: "LET'S GROW TOGETHER", content: content, img: images[2], alt: "" },
  { title: "LET'S GROW TOGETHER", content: content, img: images[3], alt: "" },
];

export default function SlideShow() {
  return (
    <div className="parallax-1">
      <Slide easing="ease">
        {slides.map((item) => (
          <div className="each-slide container mx-auto z-auto" key={item.title}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="bg-cover bg-center  h-auto text-white py-24 md:py-32 lg:py-44 px-10 object-fill"
            >
              <div className="md:w-1/2 mx-auto text-center sm:h-40 flex flex-col justify-center bg-white bg-opacity-30 md:bg-opacity-10 rounded-xl px-2">
                <h1 className="text-4xl font-bold font-extrabold gagalin text-name text-name">
                  <span className="text-name">{item.title}</span>
                </h1>
                <hr className="mt-4 border-2 mx-auto w-4/5 border-wgray-400" />
                <p className="text-base my-2 text-wgray-700">{content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
