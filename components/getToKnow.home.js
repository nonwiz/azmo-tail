export default function GetToKnowHome() {
  return (
    <section className="text-gray-600 body-font parallax-2 mix-blend multiply mx-4 md:mx-24 lg:mx-40 border border-gray-200 px-6 py-12 rounded-lg bg-white shadow-md dark:bg-rose-100 dark:text-gray-50 drop-shadow-xl shadow-2xl rounded-tl-3xl rounded-br-3xl ">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/5 lg:pr-24 md:pr-16 flex flex-col border-2 md:items-start md:text-left mb-16 md:mb-0 items-center text-center border border-gray-200 px-6 py-12 rounded-tr-3xl rounded-bl-3xl shadow-md dark:bg-cgray-50 dark:text-gray-50 bg-white bg-opacity-80 dark:bg-rose-100 dark:bg-opacity-70">
          <div className="text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cgray-500">
            GET TO KNOW AZLA
          </h2>
          <p className="mb-8 leading-relaxed text-gray-600">
            {" "}
            Hello, I am Azla from Sabah, Malaysia. currently, I am staying in
            Thailand as a full-time student. I'm majoring in Bioscience
            emphasize Community Public Health and Minoring in Education.{" "}
          </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/3 flex justify-start transform lg:-translate-x-14 translate-y-10">
          <img
            className="object-cover object-center rounded w-80"
            alt="hero"
            src="/assets/home/vertical_stack.png"
          />
        </div>
      </div>
    </section>
  );
}
