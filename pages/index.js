import Layout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import { withRouter } from "next/router";
import wpapi from "../services/wpapi";

class PostListPage extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await wpapi.posts().embed();
    return { posts };
  }
  render() {
    return <Layout>{<PostList posts={this.props.posts} />}</Layout>;
  }
}

export default withRouter(PostListPage);
