import Head from "next/head";
import Image from "next/image";
import CollegeTitle from "../components/CollegeTitle";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import NonTechnicalEvents from "../components/NonTechnicalEvents";
import OnlineEvents from "../components/OnlineEvents";
import Registration from "../components/Registration";
import TechnicalEvents from "../components/TechnicalEvents";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to BHCCS2k21</title>
        <meta
          name="description"
          content="Technical Symposium being conducted by CS dept (Shift I)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <TechnicalEvents />
      <NonTechnicalEvents />
      <OnlineEvents />
      <Registration />
      <ContactUs />
    </div>
  );
}
