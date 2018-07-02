import LinkButton from "../ui/LinkButton";
import AuthorList from "../ui/AuthorList";
import moment from "moment";

const PostListItem = ({ post }) => (
  <div>
    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h3>
      by <AuthorList authors={post._embedded.author} /> -{" "}
      {moment(post.date).format("LLL")}
    </h3>
    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    <LinkButton href={`/post?slug=${post.slug}`} as={"post/" + post.slug}>
      Read more
    </LinkButton>
  </div>
);

export default PostListItem;
