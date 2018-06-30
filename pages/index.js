import DefaultLayout from "../layouts/Layout";
import { getPosts } from "../services/wordpress";
import PostList from "../ui/PostList";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const posts = await getPosts({ perPage: 20 });
    return { posts };
  }

  render() {
    return (
      <DefaultLayout>
        <PostList posts={this.props.posts} />
      </DefaultLayout>
    );
  }
}
