import Layout from "../components/layouts/Layout";
import { getPosts } from "../services/wordpressClient";
import PostList from "../components/ui/PostList";
import { withRouter } from "next/router";

class PostListPage extends React.Component {
  static async getInitialProps({ req }) {
    const response = await getPosts({ perPage: 20 });
    return { response };
  }
  render() {
    const { response } = this.props;
    if (response.status === "ERROR") return <div>{response.errorMessage}</div>;
    if (!response.data) return <div>Aucun résulat trouvé</div>;
    return <Layout>{<PostList posts={this.props.response.data} />}</Layout>;
  }
}

export default withRouter(PostListPage);
