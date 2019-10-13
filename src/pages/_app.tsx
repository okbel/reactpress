import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
// import { ApolloProvider } from "react-apollo";
import withApolloClient from "../lib/with-apollo-client";
class MyApp extends App {
    render() {
        const { Component, pageProps, apolloClient }: any = this.props;
        return (
            <Container>
                {/* <ApolloProvider client={apolloClient}> */}
                <ApolloProviderHooks client={apolloClient}>

                    <Component {...pageProps} />
                </ApolloProviderHooks>

                {/* </ApolloProvider> */}
            </Container >
        );
    }
}

export default withApolloClient(MyApp);