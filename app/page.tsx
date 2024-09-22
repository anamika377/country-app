import Head from "next/head";
import CountryList from "./src/components/CountryList";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Country Dashboard</title>
      </Head>
      <h1>Country Dashboard</h1>
      <CountryList />
    </div>
  );
};

export default Home;
