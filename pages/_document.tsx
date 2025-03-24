import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Metadata */}
        <meta name="application-name" content="Purple Sound Company" />
        <meta name="description" content="Purple Sound Company" />
        <meta name="generator" content="Next.js" />
        <meta name="author" content="Pedro Ferreira" />
        <meta name="publisher" content="Pedro Ferreira" />
        <meta name="creator" content="Pedro Ferreira" />

        {/* Favicon */}
        <link rel="jpeg" type="image/jpeg" sizes="any" href="/favicon.ico" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
