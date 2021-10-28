import Card from "./card.posts";
import Link from "next/link";

export default function RecentHome({ recent }) {
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
        <div className="w-full my-4 text-center md:text-right">
          <Link href="/all-posts">
            <a className="text-wgray-600 dark:text-white hover:underline text-lg">
              {" "}
              View all
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
