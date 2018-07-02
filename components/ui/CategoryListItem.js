import Link from "next/link";
const CategoryListItem = ({ term }) => (
  <span style={styles.span}>
    <Link
      href={`/category?slug=${term.slug}`}
      as={`/category/${term.slug}`}
      prefetch
    >
      <a>{term.name}</a>
    </Link>
  </span>
);

const styles = {
  span: {
    paddingRight: "5px"
  }
};

export default CategoryListItem;
