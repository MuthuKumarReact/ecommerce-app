import styles from "./Footer.module.scss";

const Footer = ({ ...rest }) => {
  return (
    <div className={styles.footer} {...rest}>
      <footer className={styles.footer}>
        &copy; PlayStation {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Footer;
