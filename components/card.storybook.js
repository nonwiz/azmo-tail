import Link from "next/link";

export default function Card({ props }) {
  return (
    <>
      <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-rose-100">
        <div className="">
          <img src={props.img} className="object-cover w-24 md:w-44 h-full" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-sm md:text-xl text-gray-800 dark:text-gray-600 gagalin">
            {props.title}
          </h1>

          <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
            {props.content}
          </p>

          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-sm text-rose-300 dark:text-gray-600 md:text-md">
              {props.subcategory}
            </h1>
            <a
              href={props.a}
              target="_blank"
              className="px-1 py-1 text-xs text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
