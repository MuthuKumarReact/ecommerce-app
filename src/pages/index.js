/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

import Header from "@components/Header";

import styles from "@styles/Home.module.scss";
import Container from "@components/Container";
import Button from "@components/Button";

import products from "@data/products.json";

export default function Home() {
  console.log("products", products);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container>
          <h1>MarketPlace</h1>
          <h2>Available Cards</h2>

          <ul className={styles["products"]}>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <img src={product.image} alt={`Card for ${product.title}`} />
                  <h3 className={styles["productTitle"]}>{product.title}</h3>
                  <p className={styles["productPrice"]}>${product.price}</p>
                  <p>
                    <Button>Add to cart</Button>
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </main>

      <footer className={styles.footer}>
        &copy; MarketPlace {new Date().getFullYear()}
      </footer>
    </div>
  );
}
