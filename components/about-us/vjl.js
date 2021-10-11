export default function MainAbout() {
  return (
    <>
      <section className="py-10 mx-10 lg:mx-20">
        <div className="container px-5 sm:px-20 py-8 mx-auto shadow-xl dark:bg-rose-100 rounded-lg text-gray-500 dark:text-gray-600">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
                Our Value
              </h2>

              <p className="mt-4 ">
                We believe that every aspect is important for us to growth to
                obtain maximum healthy lifestyle. Therefore, we believe that our
                spiritual health should put at first place follow by physical
                and mental. Together we can obtain a better healthy lifestyle.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full h-64 rounded-md shadow bg-wgray-400 dark:bg-wgray-50 p-5"
                    src="/assets/about/love_undraw.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              What we do?
            </h2>

            <p className="mt-4">
              We want to share our story, experience, and studies that may help
              any individual in making decisions. We also share our ideas and
              tips which might help us to grow together.
            </p>
          </div>
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
                Our Logo
              </h2>

              <p className="mt-4 lg:max-w-md">
                There are several illustrations here that we want to show:
              </p>
              <ul className="text-base list-disc ml-3">
                <li> Head: Represent Momo, my late rabbit </li>
                <li>
                  {" "}
                  Body Part: Triangular shape representing the three aspects of
                  mental, physical, and spiritual health{" "}
                </li>
                <li> Whole Image: A woman who is hugging herself </li>
              </ul>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full h-64 rounded-md shadow bg-wgray-400 dark:bg-wgray-50 p-5"
                    src="/assets/logo.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 mx-10 lg:mx-44">
        <div className="container px-5 sm:px-20 py-8 mx-auto shadow-xl dark:bg-rose-100 rounded-lg text-gray-500 dark:text-gray-600">
          <div className="items-center lg:flex">
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-lg">
                  <img
                    className="object-cover object-center w-full h-64 rounded-md shadow bg-wgray-400 dark:bg-wgray-50"
                    src="/assets/about/azla.png"
                  />
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500 my-5">
                Who is Azla Sorubou?
              </h2>

              <p className="mt-4 ">
                Hello people, I am Azla, from Sabah, Malaysia. Currently, I am
                staying in Thailand. It has been 3 years already that I am
                staying here as a full-time student at Asia-Pacific
                International University. I am majoring in Bioscience emphasize
                in community public health and minoring in Education and
                Psychology.
              </p>
            </div>
          </div>
          <div className="my-10">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              What is my role in Azmo?
            </h2>

            <p className="mt-4">
              Besides being a founder, I am writing content sharing about my
              studies, stories, experiences, and designs. I design this webpage
              like layout and landing page. Lastly, I am also responsible for
              promoting and planning out for this website.
            </p>
          </div>
          <div className="my-10">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              My Quote
            </h2>
            <p className="text-lg text-cgray-500 mt-5">
              <span className="px-1 text-cgray-500">&#10077;</span>
              Questioning, observing, answering, correcting, and learning...
              repeat
              <span className="px-1 text-gray-500">&#10078;</span>
            </p>
          </div>

          <div className="my-10">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              My Bible Quote
            </h2>
            <div className="text-lg text-cgray-600 mt-5 bg-cgray-50 p-2 pl-5">
              <p>
              Ask, and it shall be given you, seek, and ye shall find, knock,
              and it shall be opened unto you. for every one that asked,
              received; and he that seethe, found; and to him that knocked, it
              shall be opened.
            </p>
              <p className="text-xs text-cgray-500 font-thin text-right">
                Matthew 7:7-8
              </p>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
