const Post = ({ post }) => (
  <div>
    <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h3>par {post._embedded.author[0].name}</h3>
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </div>
);

export default Post;
