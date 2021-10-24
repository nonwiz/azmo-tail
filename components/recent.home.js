import Card from "./card.posts";

export default function RecentHome() {
  const recent = [
    {
      category: "Blog",
      title:
        "Why people dislike or gossip about you and how to cope with emotional pain",
      content: "",
      a: "/post/gossip-hurt",
      img: "/assets/blog/gossip_hurts/img.png",
    },

    {
      category: "Collection",
      title: "COLLECTION: My Journal",
      content: "Did you ever wonder why do people do not like someone else?",
      a: "/assets/collection/book/journal/journal.pdf",
      img: "/assets/collection/book/journal/journal.png",
    },
    {
      category: "Storybook",
      title: "Andy and his dream to be Astronaut",
      content: "",
      a: "/post/andy-dream",
      img: "/assets/blog/storybook/andy_his_dream/andy_his_dream.png",
    },
  ];

  return (
    <section className="py-5 lg:p-6">
      <div className="mb-1 text-3xl font-medium text-center title-font sm:text-4xl text-cgray-500 dark:text-cgray-50">
        <h2 className="dark:text-cgray-50"> Recent </h2>
        <hr className="w-20 mx-auto mt-4 border-rose-200" />
      </div>

      <div className="w-full p-12">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-5">
          {recent.map((item) => (
            <Card props={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
