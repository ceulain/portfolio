import Head from "next/head";
import { useRouter } from "next/router";
import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface IContainerProps {
  children?: FC;
}

const Container: FC<IContainerProps> = ({ children }) => {
  const meta = {
    title: "Ceulain Bansimba - Developer and Football Educator",
    description: `I love football`,
    image: "/avatar.png",
    type: "website",
  };

  return (
    <React.Fragment>
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
      <main className="dark:bg-gray-800 w-full overflow-hidden">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Container;
