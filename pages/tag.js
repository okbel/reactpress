import { getPostsByTagSlug } from "../services/wordpressClient";
import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";

class TagPage extends React.Component {
  static async getInitialProps({ query }) {
    const response = await getPostsByTagSlug(query.slug, {});
    return { response };
  }
  render() {
    const { response } = this.props;
    if (response.status === "ERROR") return <div>{response.errorMessage}</div>;
    if (response.data.posts === null) return <div>No post found.</div>;
    return (
      <DefaultLayout>
        <h1>{response.data.tag.name}</h1>
        {<PostList posts={response.data.posts} />}
      </DefaultLayout>
    );
  }
}

export default withRouter(TagPage);
