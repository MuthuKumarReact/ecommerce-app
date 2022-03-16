import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.scss";
import Container from "@components/Container";

import { useSnipCart } from "@hooks/use_sinpcart";

const Header = () => {
  const { cart = {} } = useSnipCart();
  const { subtotal = "0.00" } = cart;
  return (
    <header className={styles["header"]}>
      <Container className={styles["header-container"]}>
        <p className={styles["header-title"]}>
          <Link href={"/"}><a>MarketPlace Store</a></Link>
        </p>
        <p className={styles["header-cart"]}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span>${subtotal}</span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
