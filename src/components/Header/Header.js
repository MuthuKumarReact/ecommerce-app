import { FaShoppingCart } from "react-icons/fa";

import styles from "./Header.module.scss";
import Container from "@components/Container";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Container className={styles["header-container"]}>
        <p className={styles["header-title"]}>Muthu&apos;s Store</p>
        <p className={styles["header-cart"]}>
          <FaShoppingCart />
          $0.0
        </p>
      </Container>
    </header>
  );
};

export default Header;
