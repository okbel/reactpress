const Post = ({ post }) => (
  <div>
    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </div>
);

export default Post;
