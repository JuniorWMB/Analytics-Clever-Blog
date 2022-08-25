import NavBar from "../components/Header/NavBar";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Global } from "../Context/context";

function MyApp({ Component, pageProps }) {
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
