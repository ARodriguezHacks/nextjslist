import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
        <meta name="keywords" content="nextjs" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minima
          iure! Tenetur, blanditiis. Neque quidem mollitia facere recusandae
          repellendus perspiciatis placeat officia ipsam veritatis assumenda
          necessitatibus, non aliquid dignissimos nihil.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minima
          iure! Tenetur, blanditiis. Neque quidem mollitia facere recusandae
          repellendus perspiciatis placeat officia ipsam veritatis assumenda
          necessitatibus, non aliquid dignissimos nihil.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
