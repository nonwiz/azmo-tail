export default function RecentHome() {
  return (
    <section className="p-6">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cgray-500 dark:text-cgray-50 text-center">
        {" "}
        Recent{" "}
      </h2>
      <div className="flex flex-row gap justify-center content-center">
           <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="/assets/home/momo_frame.png"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-rose-200 w-full p-4">
              <p className="text-rose-400 text-md font-medium">Blog</p>
              <h5 className="text-gray-800 dark:text-cgray-600 text-xl font-medium mb-2">
                MOMO MY BEST FRIEND
              </h5>
              <p className="text-gray-400 dark:text-cgray-500 font-light text-md">
                This is my late Bunny. click to read the full story.
              </p>
            </div>
          </a>
        </div>


        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
          <a href="#" className="w-full block h-full">
            <img
              alt="blog photo"
              src="/assets/home/momo_frame.png"
              className="max-h-40 w-full object-cover"
            />
            <div className="bg-white dark:bg-rose-200 w-full p-4">
              <p className="text-rose-400 text-md font-medium">Blog</p>
              <h5 className="text-gray-800 dark:text-cgray-600 text-xl font-medium mb-2">
                MOMO MY BEST FRIEND
              </h5>
              <p className="text-gray-400 dark:text-cgray-500 font-light text-md">
                This is my late Bunny. click to read the full story.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
