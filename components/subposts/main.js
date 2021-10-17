import Card from "../card.storybook";
import { useContext, useState, useEffect } from "react";
import { FilterPostContext } from "../hook/PostContext";
import { useRouter } from "next/router";

export default function Main({ allPosts }) {
  const router = useRouter();
  const [posts, setPosts] = useState(allPosts);
  const { filter, setFilter } = useContext(FilterPostContext);

  useEffect(() => {
    console.log("filter", filter.category);
    if (filter.category)
      setPosts(allPosts.filter((item) => item.subcategory == filter.category));
    if (filter.title)
      setPosts(
        posts.filter((item) =>
          item.title.toLowerCase().includes(filter.title.toLowerCase())
        )
      );
    if (!filter.category && !filter.title) setPosts(allPosts);
  }, [filter]);

  return (
    <>
      <div className="m-3 my-5 mb-1 text-3xl font-medium sm:text-4xl text-cgray-500 dark:text-cgray-50">
        <h2 className="dark:text-cgray-50">All {filter.siteTitle}</h2>
        <hr className="w-20 mt-4 border-rose-200" />
      </div>
      <div className="p-5">
        <div className="overflow-y-auto" style={{ height: "28rem" }}>
          <div className="flex flex-row flex-wrap items-center justify-center gap-y-5">
            {posts.map((item, index) => (
              <Card props={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
