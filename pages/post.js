import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import Post from "../components/ui/Post";
import wpapi from "../services/wpapi";

class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    const posts = await wpapi
      .posts()
      .slug(query.slug)
      .embed();
    return { post: posts[0] };
  }

  render() {
    return <DefaultLayout>{<Post post={this.props.post} />}</DefaultLayout>;
  }
}

export default withRouter(PostPage);
