import Card from '../card.posts';
import { useContext, useState, useEffect } from 'react';
import { FilterPostContext } from '../hook/PostContext';


export default function MainBlog({allPosts}) {
  const [posts, setPosts] = useState(allPosts);
  const {filter} = useContext(FilterPostContext);
  
  useEffect(() => {
    console.log("Before filter: ", posts);
    console.log("Filter", filter.title, filter.category);
    
    if (filter.category) 
      setPosts(allPosts.filter(item => item.category == filter.category));
    if (filter.title) 
      setPosts(posts.filter(item => item.title.toLowerCase().includes(filter.title.toLowerCase())));
    if (!filter.category && !filter.title)
      setPosts(allPosts);
      

  }, [filter]);
  
  return (
    <>
      <div className="m-3 my-5 mb-1 text-3xl font-medium sm:text-4xl text-cgray-500 dark:text-cgray-50">
        <h2 className="dark:text-cgray-50">All Posts</h2>
        <hr className="w-20 mt-4 border-rose-200" />
      </div>
      <div className="p-5">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-5">
          {posts.map((item, index) => (
            <Card props={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}