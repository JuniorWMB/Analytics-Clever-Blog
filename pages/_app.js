import NavBar from "../components/Header/NavBar";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Global } from "../Context/context";

function MyApp({ Component, pageProps }) {
  const logoUrl =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660688448/ga4_igliir.jpg";
  return (
    <div className="md:p-2">
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
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Twitter */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="twitter:card"
          content="Blog sur mon évolution en tant que Tracking spécialist chez 55"
          key="twcard"
        />
        {/* <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://analytics-clever-blog.com"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/juniorwembopa243/image/upload/v1661453244/justin-morgan-_Lnid7JAWFQ-unsplash_uffixe.jpg"
          key="ogimage"
        />
        <meta
          property="og:site_name"
          content="Analytics Clever Blog"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Analytics Clever | Accueil"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Blog sur mon évolution en tant que Tracking spécialist chez 55"
          key="ogdesc"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="ga-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
      </Script>
      <ThemeProvider enableSystem={true} attribute="class">
        <Global>
          <NavBar />
          <Component {...pageProps} />
        </Global>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
