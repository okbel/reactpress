import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import PostList from "../components/ui/PostList";
import wpapi from "../services/wpapi";

class categoryPage extends React.Component {
  static async getInitialProps({ query }) {
    const categories = await wpapi.categories().slug(query.slug);
    const category = categories[0];
    const posts = await wpapi
      .posts()
      .categories(category.id)
      .embed();
    return { category, posts };
  }
  render() {
    return (
      <DefaultLayout>
        <h1>{this.props.category.name}</h1>
        {<PostList posts={this.props.posts} />}
      </DefaultLayout>
    );
  }
}

export default withRouter(categoryPage);
