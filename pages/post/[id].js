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
        <meta property="og:title" content={post.title} />
        <meta property="description" content={post.content} />
        <meta property="og:description" content={post.content} />
        <meta
          property="og:image"
          content={`${post.meta ? post.meta : post.img}`}
        />
        <meta property="twitter:title" content={post.title} />
        <meta property="twitter:description" content={post.content} />

        <meta
          property="twitter:image"
          content={post.meta ? post.meta : post.img}
        />
      </Head>
      <HeroPostLayout detail={detail} />
      <div className="mt-14"></div>
      <QuoteHome />
      <div className="mt-5">
        <section className="py-5 mx-5 md:mx-10 lg:mx-20">
          <div className="container px-5 py-8 mx-auto text-base text-gray-500 rounded-lg shadow-xl sm:px-20 dark:bg-rose-100 dark:text-gray-600">
            {post.attachment_img && (
              <>
                <p>{post.note}</p>
                <div className="w-full">
                  <div className="flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-wgray-500 my-1">
                    <div className="w-2 bg-rose-300"></div>
                    <div className="flex items-start px-2 py-3">
                      <img
                        className="object-cover w-10 h-10 float-none"
                        alt="User avatar"
                        src={post.attachment_img}
                      />

                      <div className="mx-3">
                        <p className="text-gray-600 dark:text-gray-200">
                          <a
                            className="mx-1 dark:text-rose-200"
                            href={post.attachment_a}
                            target="_blank"
                          >
                            {post.attachment_content}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>

        <section className="py-5 mx-5 md:mx-10 lg:mx-20">
          <div className="container px-5 py-8 mx-auto text-base text-gray-500 rounded-lg shadow-xl sm:px-20 dark:bg-rose-100 dark:text-gray-600">
            <div className="my-8 remark">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

              {post.category == "Storybook" && (
                <>
                  <p>
                    We attach some of the materials that you can use for your
                    kids. Click on either of them to get the PDF file for free.
                  </p>
                  <div className="w-full">
                    <div className="flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-wgray-500 my-1">
                      <div className="w-2 bg-rose-300"></div>

                      <div className="flex items-start px-2 py-3">
                        <img
                          className="object-cover w-10 h-10 float-none"
                          alt="User avatar"
                          src={post.storybook_img}
                        />

                        <div className="mx-3">
                          <p className="text-gray-600 dark:text-gray-200">
                            <a
                              className="mx-1 dark:text-rose-200"
                              href={post.storybook}
                            >
                              Get storybook
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-wgray-500 my-1">
                      <div className="w-2 bg-rose-300"></div>

                      <div className="flex items-start px-2 py-3">
                        <img
                          className="object-cover w-10 h-10 float-none"
                          alt="User avatar"
                          src={post.gamecard_img}
                        />

                        <div className="mx-3">
                          <p className="text-gray-600 dark:text-gray-200">
                            <a
                              className="mx-1 dark:text-rose-200"
                              href={post.gamecard}
                            >
                              Get game card
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="text-center">
                {post.video && (
                  <>
                    <iframe
                      className="w-full mx-auto shadow-lg rounded-xl"
                      width="560"
                      height="315"
                      src={post.video}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
