import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.scss";
import Container from "@components/Container";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Container className={styles["header-container"]}>
        <p className={styles["header-title"]}>Muthu&apos;s Store</p>
        <p className={styles["header-cart"]}>
          <button className="snipcart-checkout">
            <FaShoppingCart />
            <span className="snipcart-total-price">-</span>
          </button>
        </p>
      </Container>
    </header>
  );
};

export default Header;
