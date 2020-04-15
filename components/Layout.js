import Navbar from "./Navbar";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>BitzPrice</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        ></link>
      </Head>
      <Navbar />
      <div className="container text-center">{props.children}</div>
    </div>
  );
};

export default Layout;
