import PostListItem from "./PostListItem";
const PostList = ({ posts }) => (
  <div>{posts.map(post => <PostListItem post={post} />)}</div>
);

export default PostList;
