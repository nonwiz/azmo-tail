export default function HeroPrivacy() {
  return (
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-wgray-500 dark:text-white md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300 text-base">
          We care about your privacy.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-full bg-wgray-400 rounded-xl md:w-4/5 p-5 lg:w-1/2">
          <img
            className="w-full lg:max-w-2xl"
            src="/assets/about/privacy.svg"
            alt="Privacy protection"
          />
        </div>
      </div>
    </div>
  );
}
