import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "@/components/layout/layout";
import Navbar from "@/components/navbar/navbar";
import styles from "@/styles/index.module.scss";
import TransparentButton from "@/components/transparent-button/transparent-button";

const Home: React.FC = () => {

  return (
    <Layout>
      <Head>
        <title>Home | World Wrestling Championship</title>
      </Head>
      <Navbar />
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h1>Welcome To</h1>
          <h1 className={styles.brandName}>World Wrestling Championship</h1>
          <h4>Explore wrestling matches, wrestlers, and more...</h4>
        </div>
        <div className={styles.bannerImage}></div>
      </div>
      <TransparentButton buttonText={"Explore More"} />
    </Layout>
  );
};

export default Home;
