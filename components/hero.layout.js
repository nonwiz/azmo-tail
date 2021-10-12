import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function HeroPostLayout({item}) {
  return (
    <div className="parallax-1">
          <div className="each-slide container mx-auto">
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className="bg-cover bg-center  h-auto text-white py-24 md:py-32 lg:py-44 px-10 object-fill"
            >
              <div class="md:w-1/2 mx-auto text-center sm:h-40 flex flex-col justify-center bg-white bg-opacity-60 md:bg-opacity-10 rounded-xl px-10">
                <p class="text-5xl font-bold gagalin text-name font-extrabold">
                  {item.title}
                </p>
                <p class="text-base my-2 text-wgray-700">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
    </div>
  );
}
