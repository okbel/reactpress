import { getPageBySlug } from "../services/wordpressClient";
import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import Page from "../components/ui/Page";

class PagePage extends React.Component {
  static async getInitialProps({ query }) {
    const response = await getPageBySlug(query.slug);
    return { response };
  }

  render() {
    const { response } = this.props;
    if (response.status === "ERROR") return <div>{response.errorMessage}</div>;
    if (!response.data) return <div>No post found.</div>;
    return (
      <DefaultLayout>{<Page page={this.props.response.data} />}</DefaultLayout>
    );
  }
}

export default withRouter(PagePage);
