import Card from "./card.home";

export default function RecentHome() {
       
  const recent = [
    {
      category: "Blog",
      title: "MOMO MY BEST FRIEND",
      description: "This is my late Bunny. click to read the full story.",
      a: "#",
      img: "/assets/home/momo_frame.png",
    },
    {
      category: "Vlog",
      title: "VLOG: DORM ROOM TOUR",
      description:
        "Curious how to make your dorm room to look aesthetic? Check mine!",
      a: "https://www.youtube.com/watch?v=dKwn0XIFyow",
      img: "/assets/home/vlog_room.png",
    },
  ];

  return (
    <section className="py-5 lg:p-6">
      <div className="mb-1 text-3xl font-medium text-center title-font sm:text-4xl text-cgray-500 dark:text-cgray-50">
        <h2 className="dark:text-cgray-50">
        {" "}
        Recent{" "}
        </h2>
        <hr className="w-20 mx-auto mt-4 border-rose-200"/>
      </div>
      
      <div className="w-full p-12">
        <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 xl:gap-24 justify-items-center">
          {recent.map((item) => (
            <Card props={item} key={item.title}/>
          ))}
        </div>
      </div>
    </section>
  );
}
