import styles from "./Button.module.scss";

const Button = ({ children, className, ...rest }) => {
  let className_ = styles.Button;

  if (className) {
    className_ = `${styles.Button} ${className}`;
  }
  return (
    <button className={className_} {...rest}>
      {children}
    </button>
  );
};

export default Button;
