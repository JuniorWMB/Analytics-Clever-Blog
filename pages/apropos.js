import React from "react";
import Head from "next/head";
import Hero from "../components/HeroBanner/Hero";
import About from "../components/About/About";

const apropos = () => {
  const profilUrl =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660930519/moi_pdiid5.jpg";
  const urlBgImage =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660931810/sincerely-media-4dSXcNTyXaI-unsplash_jsn6jv.jpg";
  return (
    <div>
      <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="description"
          content="zfhzefhzuhfzuhfnzfbzkjbfukzbfiuzbfizbfizbkfizbf"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={`https://analyticsclever.com/apropos`}
          key="ogurl"
        />
        <meta property="og:image" content={profilUrl} key="ogimage" />
        <meta
          property="og:site_name"
          content="Analytics Clever"
          key="ogsitename"
        />
        <meta property="og:title" content="À propos" key="ogtitle" />
        <meta
          property="og:description"
          content="zfhzefhzuhfzuhfnzfbzkjbfukzbfiuzbfizbfizbkfizbf"
          key="ogdesc"
        />
      </Head>
      <Hero picture={urlBgImage} />
      <About />
    </div>
  );
};

export default apropos;
