import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "./layout.module.css";
import HeaderLayout from "./header.layout";
import FooterLayout from "./footer.layout";

const name = "Azla Jonuling";
export const siteTitle = "Azmo | Home";

export default function Layout({ children, noContact }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Azla, public health educator shares stories and journey"
        />
        <meta property="og:title" content="Azla | Azmo" />
        <meta property="og:type" content="blog" />
        <meta
          property="og:description"
          content="Azla, public health educator shares journey"
        />
        <meta
          name="twitter:card"
          content="Azla, public health educator shares her journey and stories"
        />

        <link rel="icon" href="/assets/logo.png" className="bg-white" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossorigin="anonymous"
        ></script>
      </Head>
      <HeaderLayout />
      <main className="bg-white dark:bg-cgray-800 font-mono subpixel-antialiased"> {children} </main>
      <FooterLayout />
    </>
  );
}
