import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from './layout.module.css';

const images = [
  "/assets/bg/transparent.png",
  "/assets/slider/az_left.png",
  "/assets/slider/az_figure.png",
  "/assets/slider/fruit.png",
];

const content = 'Lifestyle, Vlogging, & Blogging, and Tips about Health';

const slides = 
[
  {'title': 'Post #1', 'content': content, img: images[0], alt: ''},
  {'title': "POST #2", 'content': content, img: images[2], alt:""},
  {'title': "POST #3", 'content': content, img: images[3], alt:""}
]

export default function BlogHero() {
  return (
    <div className="parallax-1">
      <Slide easing="ease">
        {slides.map((item) => (
          <div className="each-slide container z-auto mx-auto" key={item.title}>
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="bg-cover bg-center h-auto text-white py-24 md:py-32 lg:py-44 px-10 object-fill bg-rose-100"
            >
              <div className="md:w-1/2 mx-auto sm:mx-1 sm:h-40 flex flex-col justify-center bg-white bg-opacity-30 md:bg-opacity-10 rounded-xl px-2">
                <p className="text-3xl font-bold gagalin text-name font-extrabold text-rose-500">
                  <span className="text-name">{item.title}</span>
                </p>
                <hr className="mt-4 border-2 w-3/5 border-wgray-400" />
                <p className="text-base my-2 text-wgray-700">
                  Category | View Post
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
