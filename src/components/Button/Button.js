import styles from "./Button.module.scss";

const Button = ({ children, className, color, ...rest }) => {
  let className_ = styles.Button;

  if (className) {
    className_ = `${className_} ${className}`;
  }
  return (
    <button className={className_} data-color={color} {...rest}>
      {children}
    </button>
  );
};

export default Button;
