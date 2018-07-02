import PostListItem from "./PostListItem";

const PostList = ({ posts }) => (
  <div>{posts.map(post => <PostListItem key={post.id} post={post} />)}</div>
);

export default PostList;
