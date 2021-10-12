export default function GetToKnowHome() {
  return (
    <section className="mt-5 py-10">
      <div className="text-gray-600 parallax-2 multiply mx-4 md:mx-24 lg:mx-40 p-6 lg:py-12 rounded-lg rounded-tl-3xl rounded-br-3xl shadow-xl">
        <div className="md:flex py-12 flex-row ">
          <div className="w-1/2 self-end hidden md:block ">
            <img
              className="object-cover object-center transform scale-125 lg:scale-100 translate-x-8 md:translate-x-20 lg:translate-x-24 translate-y-10 w-4/5 xl:scale-70"
              alt="hero"
              src="/assets/home/gtk_2.png"
            />
          </div>
          <div className="w-full text-center border border-gray-200 px-6 py-6 rounded-tr-3xl rounded-bl-3xl shadow-md dark:bg-cgray-50 dark:text-gray-50 bg-white bg-opacity-80 dark:bg-rose-100 dark:bg-opacity-70">
            <div className="text-center">
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cgray-500">
                GET TO KNOW <br />
                AZLA
              </h2>
              <p className="mb-8 leading-relaxed text-gray-600">
                {" "}
                Hello, I'm Azla from Sabah, <br />Malaysia. currently, I'm staying
                in Thailand as a full-time student. I'm majoring in Bioscience
                emphasize Community Public Health and Minoring in Education.{" "}
              </p>
            </div>
          </div>
 
          <div className="w-1/2 self-start hidden md:block">
            <img
              className="object-cover object-center transform scale-125 lg:scale-100 -translate-x-8 lg:-translate-x-14 translate-y-20 w-4/5 xl:scale-70"
              alt="hero"
              src="/assets/home/gtk_1.png"
            />
          </div>

  

          <div className="w-3/5 md:hidden mx-auto my-2">
            <img
              className="object-cover object-center transform scale-125 sm:scale-110 translate-y-16 w-4/5"
              alt="hero"
              src="/assets/home/vertical_stack.png"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
