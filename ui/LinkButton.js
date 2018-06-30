import Link from "next/link";

const styles = {
  root: {
    display: "inline-block",
    border: "solid black 1px",
    padding: "1rem",
    cursor: "pointer"
  }
};

const LinkButton = ({ children, ...rest }) => {
  return (
    <div style={styles.root}>
      <Link {...rest} prefetch>
        <a> {children}</a>
      </Link>
    </div>
  );
};

export default LinkButton;
