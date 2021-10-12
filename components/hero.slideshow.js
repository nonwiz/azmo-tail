import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slides = [
  "/assets/slider/az_left.png",
  "/assets/slider/az_right_0.png",
  "/assets/slider/az_right_1.png",
];

export default function SlideShow() {
  return (
    <div className="parallax-1">
      <Slide easing="ease">
        {slides.map((item) => (
          <div className="each-slide container mx-auto">
            <div
              style={{ backgroundImage: `url(${item})` }}
              className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
            >
              <div class="md:w-1/2 mx-auto text-center sm:h-40 flex flex-col justify-center bg-white bg-opacity-60 md:bg-opacity-10 rounded-xl px-2">
                <p class="text-3xl font-bold gagalin text-name font-extrabold">
                  AZLA JONULING
                </p>
                <p class="text-base my-2 text-wgray-700">
                  Lifestyle, Vlogging, & Blogging, and Tips about Health
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
