import DefaultLayout from "../components/layouts/Layout";
import { withRouter } from "next/router";
import { getPostBySlug } from "../services/wordpressClient";
import Post from "../components/ui/Post";

class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    const post = await getPostBySlug(query.slug);
    console.log(JSON.stringify(post));
    return { post };
  }

  render() {
    return (
      <DefaultLayout>
        <Post post={this.props.post} />
      </DefaultLayout>
    );
  }
}

export default withRouter(PostPage);
