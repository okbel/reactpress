import LinkButton from "../ui/LinkButton";

const PostListItem = ({ post }) => (
  <div>
    <style>
      {/* hack to hide default more-link button from wordpress*/}
      {".more-link{display:none}"}
    </style>
    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    <LinkButton href={`/post?slug=${post.slug}`} as={"/post/" + post.slug}>
      Read more
    </LinkButton>
  </div>
);

export default PostListItem;
