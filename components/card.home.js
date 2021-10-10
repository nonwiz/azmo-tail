import Link from 'next/link';

export default function Card({props}) {
  return (
            <div className="overflow-hidden shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto transform hover:scale-105">
            <Link href={props.a}> 
            <a className="w-full block h-full" target="_blank">
              <img
                alt="blog photo"
                src={props.img}
                className="max-h-40 w-full object-cover"
              />
              <div className="bg-white dark:bg-rose-100 w-full p-4 ">
                <p className="text-rose-300 dark:text-gray-600 text-md font-medium">{props.category}</p>
                <p className="text-gray-600 text-xl mb-2 gagalin">
                  {props.title}
                </p>
                <p className="text-gray-400 dark:text-cgray-600 font-light text-md">
                  {props.description}
                </p>
              </div>
            </a>
            </Link>
          </div>
  );
}
