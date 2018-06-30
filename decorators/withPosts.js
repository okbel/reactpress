return function withPosts(Component) {
  class withPosts extends React.Component {
    state = {
      loading: "NOT_STARTED"
    };
    static async getInitialProps({ req }) {
      const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
      return { userAgent };
    }
    render() {
      <Component {...this.props} />;
    }
  }
};
