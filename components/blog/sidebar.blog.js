import { useContext } from 'react';
import { FilterPostContext } from '../hook/PostContext';

export default function SidebarBlog({ allPosts }) {
  const allCategories = [
    ...allPosts.reduce((set, item) => {
      set.add(item.category);
      return set;
    }, new Set()),
  ];

  const { filter, setFilter } = useContext(FilterPostContext);

  return (
    <>
      <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            className="w-full py-1 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-wgray-600 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            placeholder="Search"
            onChange={e => setFilter(curr => ({...curr, title: e.target.value}))}
          />
        </div>

        <div className="inset-x-0 px-6 py-3 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-wgray-600 dark:border-transparent">
          <h3 className="font-medium text-gray-700 dark:text-gray-100">
            Category
          </h3>
          {allCategories.map((category, index) => (
            <button
              className={`block py-1 my-1 text-base hover:underline ${filter.category == category ? "text-rose-400 dark:text-rose-200" : 'text-cgray-500 dark:text-gray-50'}`}
              onClick={() => setFilter(curr => ({
                ...curr, category
              }))}
              key={index}
            >
              {filter.category == category ? `> ${category}` : category}
            </button>
          ))}
           <button
              className={`block py-1 my-1 text-base hover:underline ${filter.category == '' ? "text-rose-400 dark:text-rose-200" : 'text-cgray-500 dark:text-gray-50'}`}
              onClick={() => setFilter(curr => ({
                title: '', category: ''
              }))}
            >
             Show All
            </button>


        </div>
      </section>
    </>
  );
}
