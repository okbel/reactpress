import DefaultLayout from "../components/layouts/Layout";
import { getPost } from "../services/wordpressClient";
import PostList from "../components/ui/PostList";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    console.log(req);
    //const post = await getPost(id);
    return {};
  }

  render() {
    return (
      <DefaultLayout>
        page d'un post{/*<Post post={this.props.post} />*/}
      </DefaultLayout>
    );
  }
}
