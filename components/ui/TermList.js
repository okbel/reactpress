import TermListItem from "./TermListItem";

const TermList = ({ terms }) => (
  <span>{terms.map(term => <TermListItem key={term.id} term={term} />)}</span>
);

export default TermList;
