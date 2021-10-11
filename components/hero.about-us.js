export default function HeroAbout() {
  return (
    <div className="container px-6 py-16 mx-auto text-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-wgray-500 dark:text-white md:text-4xl">
          About us
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Azmo is an individual blog website found by Miss Azla Sorubou and Mr. Chanbroset Prach. Azmo stands for the name of the founder and her late rabbit, Azla Sorubou and Momo.
        </p>
        <p className="mt-3 text-sm text-gray-400 ">Azmo + Momo</p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="w-full bg-wgray-400 rounded-xl md:w-4/5 p-5 lg:w-1/2">
          <img
            className="w-full lg:max-w-2xl"
            src="/assets/about/team_undraw.svg"
            alt="Team illustration"
          />
        </div>
      </div>
    </div>
  );
}
