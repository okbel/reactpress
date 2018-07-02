import AuthorList from "../ui/AuthorList";
import TermList from "../ui/TermList";
import moment from "moment";
const Post = ({ post }) => (
  <div>
    {console.log(JSON.stringify(post._embedded["wp:term"][0], 0, 2))}
    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
    <h2>
      by <AuthorList authors={post._embedded.author} /> -{" "}
      {moment(post.date).format("LLL")}
    </h2>
    {/*0 = categories*/}
    <TermList terms={post._embedded["wp:term"][0]} />
    {/*1 = tags*/}
    <TermList terms={post._embedded["wp:term"][1]} />
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </div>
);

export default Post;
