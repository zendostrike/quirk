import React, { Fragment } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

const Index = ({ children }) => (
  <Fragment>
    <Head>
      <title>Home</title>
      <link
        href="https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap"
        rel="stylesheet"
      />
    </Head>
    <style jsx global>{`
      body {
        font-family: "Bai Jamjuree", sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: linear-gradient(
          45deg,
          rgba(4, 0, 43, 1) 0%,
          rgba(62, 0, 107, 1) 100%
        );
        background-repeat: no-repeat;
        color: #fff;
      }
    `}</style>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default Index;
