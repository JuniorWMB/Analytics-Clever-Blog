import React from "react";
import Head from "next/head";
import FormContact from "../components/FormContact/FormContact";

import Hero from "../components/HeroBanner/Hero";

const Contact = () => {
  const urlImage =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660918418/markus-winkler-IrRbSND5EUc-unsplash_knaqjq.jpg";
  return (
    <main>
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
          content={`https://analyticsclever.com/contact`}
          key="ogurl"
        />
        <meta property="og:image" content={urlImage} key="ogimage" />
        <meta
          property="og:site_name"
          content="Analytics Clever | Contact"
          key="ogsitename"
        />
        <meta property="og:title" content="Contact" key="ogtitle" />
        <meta
          property="og:description"
          content="zfhzefhzuhfzuhfnzfbzkjbfukzbfiuzbfizbfizbkfizbf"
          key="ogdesc"
        />
      </Head>
      <Hero picture={urlImage} />
      <FormContact />
    </main>
  );
};

export default Contact;
