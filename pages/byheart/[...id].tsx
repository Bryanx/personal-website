import { NotionRenderer, BlockMapType } from "react-notion";
import fetch from "node-fetch";
import { useRouter } from 'next/router'
import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Image from "next/image";

export async function getServerSideProps(context) {
  const data: BlockMapType = await fetch(
    "https://notion-api.splitbee.io/v1/page/95487d06a4934a85b9d4d4ba559de73f"
  ).then(res => res.json());
  return {
    props: {
      blockMap: data
    }
  };
}

const PageComponent = ({ blockMap }) => {
  return (
    <>
      <NextSeo
        title={"Byheart - Flashcards"}
        description="Start learning with Byheart!"
        openGraph={{
          images: [
            {
              url: 'https://raw.githubusercontent.com/Bryanx/byheart/remote-store/byheart_files/logo.png',
              width: 150,
              height: 150,
              alt: 'Byheart - Flashcards',
            }],
        }}
      />
      <Head>
        <style>{`body { margin: 0;}`}</style>
        <title>Byheart</title>
      </Head>
      <a href="https://play.google.com/store/apps/details?id=nl.bryanderidder.byheart">
        <Image src="/byheart_logo.svg" alt="Byheart" width={120} height={120} />
      </a>
      <p>You have to download the Byheart app<br/>to see these flashcards.</p>
      <p>After downloading the app, refresh this link<br/>and select 'Open with Byheart'.</p>
      <div className="badge-image">
        <a href="https://play.google.com/store/apps/details?id=nl.bryanderidder.byheart">
          <Image src="/google_play.png" alt="Get it on Google Play" width={200} height={60} />
        </a>
      </div>
      <style jsx global>{`
        body {
          background: rgb(92,87,192);
          background: linear-gradient(135deg, rgba(92,87,192,1) 0%, rgba(92,149,192,1) 100%);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
        }
        p {
          text-align: center;
          line-height: 1.5;
          margin: 2rem;
        }
        a {
          display: flex;
          justify-content: center;
          cursor: default;
        }
      `}</style>
    </>
  );
};
export default PageComponent;