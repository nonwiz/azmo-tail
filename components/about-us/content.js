import Card from "../../components/card.home";

export default function MainAbout() {
  const members = {
    category: "Founder",
    title: "Azla Sorubou",
    content: "Hello people, I am Azla, from Sabah, Malaysia",
    a: "/about/azla",
    img: "/assets/about/azla_1.png",
  };

  return (
    <>
      <section className="py-10 mx-10 lg:mx-20">
        <div className="container px-5 py-8 mx-auto text-gray-500 rounded-lg shadow-xl sm:px-20 dark:bg-rose-100 dark:text-gray-600">
          <div className="items-center lg:flex">
            <div>
              <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
                Our Value
              </h2>

              <p className="mt-4 text-base ">
                We believe that every aspect is important for us to growth to
                obtain maximum healthy lifestyle. Therefore, we believe that our
                spiritual health should put at first place follow by physical
                and mental. Together we can obtain a better healthy lifestyle.
              </p>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-3xl font-bold text-wgray-600 dark:text-wgray-500">
              What we do?
            </h2>

            <p className="mt-4 text-base">
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

              <p className="mt-4 text-base lg:max-w-md">
                There are several illustrations here that we want to show:
              </p>
              <ul className="ml-3 text-base list-disc">
                <li> Head: Represent Momo, my late rabbit </li>
                <li>
                  Body Part: Triangular shape representing the three aspects of
                  mental, physical, and spiritual health{" "}
                </li>
                <li> Whole Image: A woman who is hugging herself </li>
              </ul>
            </div>

            <div className="mt-2 lg:mt-0 lg:w-1/2">
              <div className="flex">
                <div className="max-w-lg">
                  <img className="w-40 p-5 rounded-md" src="/assets/logo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5 py-8 mx-auto my-10 text-gray-500 rounded-lg shadow-xl sm:px-20 dark:bg-rose-100 dark:text-gray-600">
          <h2 className="text-3xl font-bold text-center text-wgray-600 dark:text-wgray-500">
            Meet our team
          </h2>
          <div className="my-5">
            <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 xl:gap-24 justify-items-center">
              <Card props={members} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
