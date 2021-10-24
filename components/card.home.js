import Link from "next/link";

export default function Card({ props }) {
  return (
    <div className="w-64 h-auto m-auto mx-5 overflow-hidden rounded-lg shadow-2xl cursor-pointer transform hover:scale-105">
      <Link href={`${props.a ? props.a : "/404"}`}>
        <a className="block w-full h-full" target="_blank">
          <img
            alt={props.alt}
            src={props.img}
            className="object-cover w-full max-h-40"
          />
          <div className="w-full p-4 bg-white h-44 dark:bg-rose-100">
            <p className="text-base font-medium text-rose-300 dark:text-gray-600">
              {props.category}
            </p>
            <p className="mb-2 text-base text-gray-600 gagalin">
              {props.title}
            </p>
            <p className="font-light text-gray-400 dark:text-cgray-600 text-md">
              {props.content}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
}
