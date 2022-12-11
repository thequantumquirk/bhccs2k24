import Head from "next/head";
import Hero from "../components/Hero";
import NonTechnicalEvents from "../components/NonTechnicalEvents";
import OnlineEvents from "../components/OnlineEvents";
import Registration from "../components/Registration";
import TechnicalEvents from "../components/TechnicalEvents";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to BHCCS2k23</title>
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
      {/* <ContactUs /> */}
    </div>
  );
}
