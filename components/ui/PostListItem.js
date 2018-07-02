import LinkButton from "../ui/LinkButton";
import AuthorList from "../ui/AuthorList";
import TermList from "../ui/TermList";
import moment from "moment";

const PostListItem = ({ post }) => (
  <div>
    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h3>
      by <AuthorList authors={post._embedded.author} /> -{" "}
      {moment(post.date).format("LLL")}
    </h3>
    {/*0 = categories*/}
    <TermList terms={post._embedded["wp:term"][0]} />
    {/*1 = tags*/}
    <TermList terms={post._embedded["wp:term"][1]} />
    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    <LinkButton href={`/post?slug=${post.slug}`} as={"post/" + post.slug}>
      Read more
    </LinkButton>
  </div>
);

export default PostListItem;
