import HomeLayout from "@/Components/HomeLayout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gamr Empire - Players with extreme gamer tags</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeLayout/>
      </main>
    </>
  );
}
