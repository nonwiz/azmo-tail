import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function HeroPostLayout({ detail }) {
  return (
    <div className="parallax-1">
      <div className="container mx-auto each-slide">
        <div
          style={{ backgroundImage: `url(${detail.img})` }}
          className="object-fill h-auto px-10 py-24 text-white bg-center bg-cover md:py-32 lg:py-44"
        >
          <div className="flex flex-col justify-center px-10 mx-auto text-center bg-white md:w-1/2 sm:h-40 bg-opacity-30 md:bg-opacity-10 rounded-xl">
            <h1 className="text-xl font-bold font-extrabold gagalin">
              <span className="text-name"> {detail.title} </span>
            </h1>
            <hr className="w-4/5 mx-auto mt-4 border-2 border-wgray-400" />
            <p className="my-2 text-base text-wgray-700">{detail.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
