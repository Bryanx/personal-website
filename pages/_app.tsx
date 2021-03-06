import "react-notion/src/styles.css";
import '../styles/global.css'
import "prismjs/themes/prism-tomorrow.css";
import React from "react";
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
