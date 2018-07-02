import Link from "next/link";
const TagListItem = ({ tag }) => (
  <span style={styles.span}>
    <Link href={`/tag?slug=${tag.slug}`} as={`/tag/${tag.slug}`} prefetch>
      <a> {tag.name}</a>
    </Link>
  </span>
);

const styles = {
  span: {
    paddingRight: "5px"
  }
};

export default TagListItem;
