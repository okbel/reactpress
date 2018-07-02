const TermListItem = ({ term }) => <span style={styles.span}>{term.name}</span>;

const styles = {
  span: {
    border: "solid silver 1px",
    color: "#555",
    padding: "5px",
    margin: "4px",
    borderRadius: "4px"
  }
};

export default TermListItem;
