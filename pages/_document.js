import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    const logoUrl =
      "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660688448/ga4_igliir.jpg";
    return (
      <html lang="fr">
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

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@YOUR_TWITTER_USERNAME" />
          <meta
            name="Analytics Clever | Accueil"
            content="TITLE_FOR_YOUR_PAGE"
          />
          <meta
            name="twitter:description"
            content="Blog sur mon evolution en tant que Tracking specialist chez 55"
          />
          <meta name="twitter:image" content={logoUrl} />

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
          <meta property="og:image" content={logoUrl} key="ogimage" />
          <meta
            property="og:site_name"
            content="Analytics Clever"
            key="ogsitename"
          />
          <meta
            property="og:title"
            content="Analytics Clever | Accueil"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Blog sur mon evolution en tant que Tracking specialist chez 55"
            key="ogdesc"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
