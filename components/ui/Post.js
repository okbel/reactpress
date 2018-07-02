import AuthorList from "../ui/AuthorList";
import moment from "moment";
const Post = ({ post }) => (
  <div>
    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h2>
      by <AuthorList authors={post._embedded.author} /> -{" "}
      {moment(post.date).format("LLL")}
    </h2>
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </div>
);

export default Post;
