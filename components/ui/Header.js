const Header = ({ children }) => (
  <header style={styles.header}>{children}</header>
);

const styles = {
  header: {
    textAlign: "center",
    padding: "2rem 0 0 0"
  }
};

export default Header;
