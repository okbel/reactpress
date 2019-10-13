import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import '../styles/posts.css';

const GET_POSTS = gql`query GET_POSTS {
  posts(first: 1) {
    edges {
      node {
        id
        title
        date
        content
      }
    }
  }
}

`
const Index = () => {
    const { data, error, loading } = useQuery(GET_POSTS);

    if (loading) {
        <div>Loading...</div>
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    };

    if (data.posts) {
        return <div>{data.posts.edges.map(({ node }) => {
            console.log(node)
            return <div dangerouslySetInnerHTML={{ __html: node.content }}></div>
        })}</div>
    }

    return <div>Loading...</div>;
};

export default Index;