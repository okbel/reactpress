import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import fetch from "isomorphic-unfetch";
import { WORDPRESS_GRAPHQL_BACKEND } from './constants';
import { isBrowser } from "./isBrowser";


let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
    (global as any).fetch = fetch;
}

function create(initialState: any) {
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient({
        //@ts-ignore
        connectToDevTools: process.browser,
        //@ts-ignore
        ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
        link: new HttpLink({
            uri: WORDPRESS_GRAPHQL_BACKEND, // Server URL (must be absolute)
            credentials: "same-origin" // Additional fetch() options like `credentials` or `headers`
        }),
        cache: new InMemoryCache().restore(initialState || {})
    });
}

export default function initApollo(initialState: any) {
    if (!isBrowser) {
        return create(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
}