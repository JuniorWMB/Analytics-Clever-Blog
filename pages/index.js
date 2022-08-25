import Head from "next/head";
import { useEffect, useContext, useState } from "react";
import ButtonScrollTop from "../components/ButtonScrollTop/ButtonScrollTop";
import NavBar from "../components/Header/NavBar";
import Hero from "../components/HeroBanner/Hero";
import Posts from "../components/Posts/Posts";
import { ContextStore } from "../Context/context";
import { getPosts } from "../services/index";

export default function Home({ postsResponse }) {
  const { setPostModal } = useContext(ContextStore);
  const [showTopScroll, setShowTopScroll] = useState(false);

  const logoUrl =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660688448/ga4_igliir.jpg";

  useEffect(() => {
    setPostModal(postsResponse);
  }, []);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 424) {
        setShowTopScroll(true);
      } else {
        setShowTopScroll(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className="relative">
      <Head>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="180x180"
            href="/favicon-32x32.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta
            name="description"
            content="nekrjbekjrbvlekjrbvlekjbvlkejbrvlikejbvilerkbjvlekrbverkb"
          />

          {/* Open Graph */}
          <meta
            property="og:url"
            content={`https://analyticsclever.com`}
            key="ogurl"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/juniorwembopa243/image/upload/v1661453244/justin-morgan-_Lnid7JAWFQ-unsplash_uffixe.jpg"
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content="Analytics Clever"
            key="ogsitename"
          />
          <meta
            property="og:title"
            content="Analytics Clever | Accueil "
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="nekrjbekjrbvlekjrbvlekjbvlkejbrvlikejbvilerkbjvlekrbverkb"
            key="ogdesc"
          />
        </Head>
      </Head>

      <main className="">
        <Hero />
        <div className=" flex flex-col sm:grid grid-cols-2 gap-4 xl:md:grid-cols-4 ">
          {postsResponse.map((post, i) => (
            <Posts
              post={post.node}
              key={post.title}
              isLast={i === postsResponse.length - 1}
            />
          ))}
        </div>
      </main>
      {showTopScroll && (
        <div className=" flex justify-end sticky z-50 right-3 bottom-7 pr-5">
          <ButtonScrollTop />
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const postsResponse = (await getPosts()) || [];

  return {
    props: { postsResponse },
  };
}
