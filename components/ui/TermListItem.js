const TermListItem = ({ term }) => <span style={styles.span}>{term.name}</span>;

const styles = {
  span: {
    paddingRight: "5px"
  }
};

export default TermListItem;
