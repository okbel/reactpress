import { getPostBySlug } from "../services/wordpressClient";
import { withRouter } from "next/router";
import DefaultLayout from "@theme/components/layouts/Layout";
import Post from "@theme/components/ui/Post";

class PostPage extends React.Component {
  static async getInitialProps({ query }) {
    const response = await getPostBySlug(query.slug);
    return { response };
  }

  render() {
    const { response } = this.props;
    if (response.status === "ERROR") return <div>{response.errorMessage}</div>;
    if (!response.data) return <div>No post found.</div>;
    return (
      <DefaultLayout>{<Post post={this.props.response.data} />}</DefaultLayout>
    );
  }
}

export default withRouter(PostPage);
