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
          content="We are so excited to launch our brand Azmo's page. Our goal is to use this space to connect with you through our story, idea and tips, and knowledge. if you have any questions please do sent us a message"
        />
        <link rel="icon" href="/assets/logo.png" />
      </Head>
      <HeaderLayout />
      <main className="bg-white dark:bg-wgray-600 subpixel-antialiased">
        {" "}
        {children}{" "}
      </main>
      <FooterLayout />
    </>
  );
}
