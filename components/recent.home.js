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
      a: "#",
      img: "/assets/home/vlog_room.png",
    },
  ];

  return (
    <section className="p-6">
      <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-cgray-500 dark:text-cgray-50 text-center">
        {" "}
        Recent{" "}
      </h2>

      <div className="w-full p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {recent.map((item) => (
            <Card props={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
