import Head from "next/head";
import Image from "next/image";
import App from "../components/App";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Plus Chat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </div>
  );
}