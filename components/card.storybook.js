import Link from "next/link";
import { truncate } from "../lib/process";

export default function Card({ props }) {
  return (
    <>
      <div className="flex max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-rose-100">
        <div className="">
          <img src={props.img} className="object-cover w-24 h-full md:w-44" />
        </div>

        <div className="w-2/3 p-4 md:p-4">
          <h1 className="text-base text-gray-800 md:text-lg dark:text-gray-600 gagalin">
            {truncate(props.title)}
          </h1>

          <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
            {props.content}
          </p>

          <div className="flex justify-between mt-3 item-center">
            <h1 className="text-sm text-rose-300 dark:text-gray-600 md:text-md">
              {props.subcategory}
            </h1>
            <Link href={props.a ? props.a : `post/${props.id}`}>
              <a
                target="_blank"
                className="px-1 py-1 text-xs text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
              >
                View
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
