import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import QuoteHome from "../../components/quote.home";
import HeroPostLayout from "../../components/hero.layout";

export default function Post({ post }) {
  const detail = {
    title: post.title,
    content: (
      <>
        {" "}
        <Link href="/all-posts">
          <a> Posts </a>
        </Link>{" "}
        / {post.category}{" "}
      </>
    ),
    img: "",
    alt: "",
  };

  return (
    <Layout>
      <Head>
        <title>{post.title} | Azmo</title>
      </Head>
      <HeroPostLayout detail={detail} />
      <div className="mt-14"></div>
      <QuoteHome />
      <div className="mt-5">
        <section className="py-10 mx-10 lg:mx-20">
          <div className="container px-5 py-8 mx-auto text-base text-gray-500 rounded-lg shadow-xl sm:px-20 dark:bg-rose-100 dark:text-gray-600">
            <div className="my-8">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
              <div className="text-center">
                {post.video && (
                  <>
                    <iframe
                      className="w-full mx-auto shadow-lg rounded-xl"
                      width="560"
                      height="315"
                      src={post.video}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <p> {post.content} </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      post: postData,
    },
  };
}
