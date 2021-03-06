import styles from "./Container.module.scss";

const Container = ({ children, className, ...rest }) => {
  let className_ = styles.Container;

  if (className) {
    className_ = `${className_} ${className}`;
  }
  return <div className={className_} {...rest}>{children}</div>;
};

export default Container;
