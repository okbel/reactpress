import TermListItem from "./TermListItem";
const TermList = ({ terms }) => (
  <div>{terms.map(term => <TermListItem key={term.id} term={term} />)}</div>
);

export default TermList;
