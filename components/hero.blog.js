import { Slide } from "react-slideshow-image";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import styles from "./layout.module.css";
import { useState } from "react";

const tranparent = "/assets/bg/transparent.png";

export default function BlogHero({ slides }) {
  const [bg, setBg] = useState("/assets/bg/p1.png");
  return (
    <div className="parallax-1" style={{ backgroundImage: `url(${bg})` }}>
      <Slide easing="ease">
        {slides.map((item) => (
          <div className="container mx-auto each-slide" key={item.title}>
            <div className="object-fill h-auto px-10 py-10 bg-center bg-cover md:py-32 lg:py-44">
              <div className="container mx-auto max-h-64">
                <div className="flex flex-wrap-reverse items-center">
                  <div className="w-full p-3 bg-white md:w-2/3 lg:mx-10 lg:w-1/2 bg-opacity-30 md:bg-opacity-40 rounded-xl">
                    <div className="pt-5 text-center lg:max-w-lg md:text-left">
                      <h1 className="text-xl font-bold font-extrabold md:text-3xl gagalin">
                        <span className="text-name"> {item.title} </span>
                      </h1>
                      <hr className="w-4/5 mx-auto mt-1 border-2 md:mt-4 border-wgray-400 md:mx-1" />
                      <p className="my-2 text-base text-wgray-700">
                        {item.category} |
                        <Link href={`post/${item.id}`}>
                          <a> View Post </a>
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center w-full p-3 md:w-1/3">
                    <img
                      className="w-auto rounded-lg h-36 md:h-44 lg:h-80"
                      src={item.bg ? item.bg : item.img}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
