import TagListItem from "./TagListItem";

const TagList = ({ tags }) => (
  <span>{tags.map(tag => <TagListItem key={tag.id} tag={tag} />)}</span>
);

export default TagList;
