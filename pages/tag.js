import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import wpapi from "../services/wpapi";

class TagPage extends React.Component {
  static async getInitialProps({ query }) {
    const tags = await wpapi.tags().slug(query.slug);
    const tag = tags[0];
    const posts = await wpapi
      .posts()
      .tags(tag.id)
      .embed();
    return { tag, posts };
  }
  render() {
    return (
      <DefaultLayout>
        <h1>{this.props.tag.name}</h1>
        {<PostList posts={this.props.posts} />}
      </DefaultLayout>
    );
  }
}

export default withRouter(TagPage);
