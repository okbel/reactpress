import DefaultLayout from "../components/layouts/Layout";
import { withRouter } from "next/router";
import { getPost } from "../services/wordpressClient";
import Post from "../components/ui/Post";

class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    const post = await getPost(query.id);
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
