import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/public/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
