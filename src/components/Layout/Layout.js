import Head from "next/head";

import Header from "@components/Header";
import Footer from "@components/Footer";

import styles from "./Layout.module.scss";

const Layout = ({ children, className, ...rest }) => {
  let className_ = styles.layout;

  if (className) {
    className_ = `${className_} ${className}`;
  }
  return (
    <div className={className_} {...rest}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
