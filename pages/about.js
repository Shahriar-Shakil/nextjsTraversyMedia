import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <div>
        <h1>About BitzPrice</h1>
        <p>Application to view Bitcoin prices</p>
      </div>
    </Layout>
  );
};
export default About;
