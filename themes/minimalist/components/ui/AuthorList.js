import AuthorListItem from "./AuthorListItem";

const AuthorList = ({ authors }) => (
  <span>
    {authors.map(author => <AuthorListItem key={author.id} author={author} />)}
  </span>
);

export default AuthorList;
