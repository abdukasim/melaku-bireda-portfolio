import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Hero from "../components/Hero";
import Music from "../components/Music";

export default function Home() {
  return (
    <>
      <Head>
        <title>Melaku Bireda - Ethiopian Artist</title>
        <meta name="description" content="Melaku Bireda Portfolio" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Hero />
      <About />
      <Music />
    </>
  );
}
