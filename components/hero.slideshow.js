import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const images = [
  "/assets/slider/az_left.png",
  "/assets/slider/az_right_0.png",
  "/assets/slider/az_right_1.png",
];

export default function SlideShow() {
  return (
    <div className="parallax-1">
      <Slide easing="ease">
        <div className="each-slide container mx-auto">
          <div
            style={{ backgroundImage: `url(${images[0]})` }}
            className="bg-cover bg-center  h-full text-white py-24 px-10 object-fill"
          >
            <div class="md:w-1/2 mx-auto text-center h-40 flex flex-col justify-center">
              <p class="text-3xl font-bold gagalin text-name">AZLA JONULING</p>
              <p class="text-base my-2 text-wgray-500">
                Lifestyle, Vlogging, & Blogging, and Tips about Health
              </p>
            </div>
          </div>
        </div>
        <div className="each-slide container mx-auto">
          <div
            style={{ backgroundImage: `url(${images[1]})` }}
            className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
          >
              <div class="md:w-1/2 mx-auto text-center h-40 flex flex-col justify-center">
              <p class="text-3xl font-bold gagalin text-name">AZLA JONULING</p>
              <p class="text-base my-2 text-wgray-500">
                Lifestyle, Vlogging, & Blogging, and Tips about Health
              </p>
            </div>

          </div>
        </div>
      </Slide>
    </div>
  );
}
