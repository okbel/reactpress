import CategoryListItem from "./CategoryListItem";

const TermList = ({ terms }) => (
  <span>
    {terms.map(term => <CategoryListItem key={term.id} term={term} />)}
  </span>
);

export default TermList;
