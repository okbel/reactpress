import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import Page from "../components/ui/Page";
import wpapi from "../services/wpapi";

class PagePage extends React.Component {
  static async getInitialProps({ query }) {
    const pages = await wpapi
      .pages()
      .slug(query.slug)
      .embed();
    return { page: pages[0] };
  }

  render() {
    return <DefaultLayout>{<Page page={this.props.page} />}</DefaultLayout>;
  }
}

export default withRouter(PagePage);
