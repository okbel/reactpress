import { getTagBySlug } from "../services/wordpressClient";
import { withRouter } from "next/router";
import DefaultLayout from "../components/layouts/Layout";
import Tag from "../components/ui/Tag";

class TagPage extends React.Component {
  static async getInitialProps({ query }) {
    const response = await getTagBySlug(query.slug);
    console.log(response);
    return { response };
  }

  render() {
    const { response } = this.props;
    if (response.status === "ERROR") return <div>{response.errorMessage}</div>;
    if (!response.data) return <div>No post found.</div>;
    return (
      <DefaultLayout>{<Tag tag={response.data} />}</DefaultLayout>
    );
  }
}

export default withRouter(TagPage);
