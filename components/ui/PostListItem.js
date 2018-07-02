import LinkButton from "../ui/LinkButton";
import AuthorList from "../ui/AuthorList";
import TermList from "../ui/TermList";
import moment from "moment";

const PostListItem = ({ post }) => (
  <div>
    <style>
      {/* hack to hide default more-link button from wordpress*/}
      {".more-link{display:none}"}
    </style>
    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h3>
      by <AuthorList authors={post._embedded.author} /> -{" "}
      {moment(post.date).format("LLL")}
    </h3>
    {post._embedded["wp:term"][0].length > 0 && (
      <p>
        Catégories:
        <TermList terms={post._embedded["wp:term"][0]} />
      </p>
    )}
    {post._embedded["wp:term"][1].length > 0 && (
      <p>
        Tags:
        <TermList terms={post._embedded["wp:term"][1]} />
      </p>
    )}
    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    <LinkButton href={`/post?slug=${post.slug}`} as={"post/" + post.slug}>
      Read more
    </LinkButton>
  </div>
);

export default PostListItem;
