export default function Card({props}) {
  return (
            <div className="overflow-hidden shadow-2xl rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href={props.a} className="w-full block h-full">
              <img
                alt="blog photo"
                src={props.img}
                className="max-h-40 w-full object-cover"
              />
              <div className="bg-white dark:bg-rose-100 w-full p-4 ">
                <p className="text-rose-300 dark:text-gray-600 text-md font-medium">{props.category}</p>
                <p className="text-cgray-900 text-xl font-medium mb-2">
                  {props.title}
                </p>
                <p className="text-gray-400 dark:text-cgray-600 font-light text-md">
                  {props.description}
                </p>
              </div>
            </a>
          </div>
  );
}
