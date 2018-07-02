import AuthorList from "../ui/AuthorList";
import TermList from "../ui/TermList";
import moment from "moment";

const Post = ({ post }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h2>
      by <AuthorList authors={post._embedded.author} /> -{" "}
      {moment(post.date).format("LLL")}
    </h2>
    {post._embedded["wp:term"][0].length > 0 && (
      <p>
        Catégories:
        <TermList terms={post._embedded["wp:term"][0]} />
      </p>
    )}
    {post._embedded["wp:term"][1].length > 0 && (
      <p>
        <TermList terms={post._embedded["wp:term"][1]} />
      </p>
    )}
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </div>
);

export default Post;
