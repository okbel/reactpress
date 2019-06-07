import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_POSTS = gql`query GET_POSTS {
  posts {
    edges {
      node {
        id
        title
        date
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
            return <li key={node.id}>{node.title} </li>
        })}</div>
    }

    return <div>Loading...</div>;
};

export default Index;