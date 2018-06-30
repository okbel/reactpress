import Layout from "../components/layouts/Layout";
import { getPosts } from "../services/wordpressClient";
import PostList from "../components/ui/PostList";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await getPosts({ perPage: 20 });
    return { posts };
  }
  render() {
    return (
      <Layout>
        <PostList posts={this.props.posts} />
      </Layout>
    );
  }
}
