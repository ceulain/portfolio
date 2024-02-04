import Head from "next/head";
import React, { FC, ReactElement } from "react";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";

interface IContainerProps {
  children?: ReactElement;
}

const Container: FC<IContainerProps> = ({ children }) => {
  const meta = {
    title: "Ceulain Bansimba - Developer and Football Educator",
    description: `I love football`,
    image: "/avatar.png",
    type: "website",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {/* <meta name="robots" content="follow, index" /> */}
        <meta content={meta.description} name="description" />
        {/* <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ceulain Bansimba" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>

      <Navbar />
      <main className="dark:bg-gray-800 w-full overflow-hidden">
        <div>{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default Container;
