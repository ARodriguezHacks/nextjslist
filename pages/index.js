import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minima
        iure! Tenetur, blanditiis. Neque quidem mollitia facere recusandae
        repellendus perspiciatis placeat officia ipsam veritatis assumenda
        necessitatibus, non aliquid dignissimos nihil.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minima
        iure! Tenetur, blanditiis. Neque quidem mollitia facere recusandae
        repellendus perspiciatis placeat officia ipsam veritatis assumenda
        necessitatibus, non aliquid dignissimos nihil.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  );
}
